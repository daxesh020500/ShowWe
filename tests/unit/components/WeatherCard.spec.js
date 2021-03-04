import { shallowMount, createLocalVue} from "@vue/test-utils";
import WeatherCard from "/Users/daxeshparmar/Desktop/UI/showwe/src/components/WeatherCard.vue";
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
const stubs = {
    WeatherCard:true
}

function getStore(){
    const state = {
        weatherDetail : {
            name : '',
            weather : [
                {
                    main : ''
                }
            ],
            main:{
                temp : 0,
                temp_max :0,
                temp_min : 0,
                feels_like :0
            },
            wind:{
                speed : ''
            }
        },
        weatherIconId: ''
    }
    const getters = {
        getWeatherDetail: (state) => state.weatherDetail,
        getWeatherIconId: (state) => state.weatherIconId
    }
    const options = {
        state,
        getters
    }
    const store = new Vuex.Store(options)

    return{
        store,
        ...options
    }
}

describe('WeatherCard Test', () =>{
    const wrapper = shallowMount(WeatherCard ,{
        localVue,
        stubs,
        store : getStore().store,
    })

    it('Initialized Well' , () =>{
        expect(wrapper.vm).toBeTruthy()
    })

    it('[COMPUTED] getName when not present', () => {
        expect(wrapper.vm.getName).toEqual('')
    })

    it('[COMPUTED] getName when present', () => {
        wrapper.vm.$store.state.weatherDetail.name = 'China'
        expect(wrapper.vm.getName).toEqual('China')
        wrapper.vm.$store.state.weatherDetail.name = ''
    })

    it('[COMPUTED] getDesc when not present', () => {
        expect(wrapper.vm.getDesc).toEqual('')
    })

    it('[COMPUTED] getDesc when present', () =>{
        wrapper.vm.$store.state.weatherDetail.weather[0].main = 'Cloudy'
        expect(wrapper.vm.getDesc).toEqual('Cloudy')
    })

    it('[COMPUTED] getHighTemp when not present', () => {
        expect(wrapper.vm.getHighTemp).toEqual('0')
    })

})