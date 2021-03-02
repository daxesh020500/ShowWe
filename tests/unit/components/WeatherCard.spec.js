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
        weatherDetail : {},
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
})