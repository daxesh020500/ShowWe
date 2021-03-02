import {shallowMount, createLocalVue} from "@vue/test-utils";
import Home from "@/views/Home";
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = {
    WeatherCard:true
}
function getStroe(){
    const state = {
        weatherDetail : {}
    }
    const getters = {
        getWeatherDetail: () => {}
    }
    const actions = {
        setWeatherDetail : jest.fn()
    }
    const options = {
        state,
        actions,
        getters,
    }
    const store = new Vuex.Store(options)

    return{
        store,
        ...options
    }
}
describe('Home Test ', () => {
    const wrapper = shallowMount(Home, {
        localVue,
        stubs,
        store: getStroe().store,
        data(){
            return{
                cityName : ""
            }
        }
    })

    it('Initialized Well' , () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('[METHOD] getWeather', () => {

    })
})