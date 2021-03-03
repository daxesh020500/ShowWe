import {mount,createLocalVue} from "@vue/test-utils";
import Home from "@/views/Home";
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = {
    WeatherCard:true
}
function getStore(){
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
    const wrapper = mount(Home, {
        localVue,
        stubs,
        store: getStore().store,
        data(){
            return{
                cityName : ""
            }
        },
    })

    it('Initialized Well' , () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('[METHOD] getWeather', () => {
        const getWeatherSpy = jest.spyOn(wrapper.vm,'getWeather')
        const setWeatherDetailsSpy = jest.spyOn(wrapper.vm,'setWeatherDetail')
        wrapper.vm.cityName = ''
        wrapper.vm.getWeather()
        expect(getWeatherSpy).toHaveBeenCalled()
        expect(setWeatherDetailsSpy).toHaveBeenCalled()

        //Called With cityName argument
        wrapper.vm.cityName = 'Chennai'
        wrapper.vm.getWeather()
        expect(setWeatherDetailsSpy).toBeCalledWith('Chennai')
    })
})