import axios from "axios";
import weatherDetails from "/Users/daxeshparmar/Desktop/UI/showwe/src/store/modules/weatherDetails.js";
jest.mock("axios")
describe("ACTIONS store/modules/weatherDetails.js " , () => {
    it('Action : Set WeatherDetail',()=> {
        const commit = jest.fn()
        const response  = {
            data : {}
        }
        axios.request = jest.fn().mockImplementation((config)=> {
            return Promise.resolve(response)
        })
        weatherDetails.actions.setWeatherDetail({commit},"China")
        //expect(commit).toHaveBeenCalledWith('SET_WEATHER_DETAILS',{})
        expect(axios.request).toHaveBeenCalled()
    })
})

describe("GETTERS store/modules/weatherDetails.js" , () =>{
    let state = {
        weatherDetail : {
            weather : [
                {
                    icon : "hh"
                }
            ]
        }
    }

    it('getWeatherDetail', ()=>{
        const weather = {
            weather : [
                {
                    icon : "hh"
                }
            ]
        }
        expect(weatherDetails.getters.getWeatherDetail(state)).toEqual(weather)
    })

    it('getWeatherIconId',()=>{
        expect(weatherDetails.getters.getWeatherIconId(state)).toEqual("hh")
    })
})

describe('MUTATIONS store/modules/weatherDetails.js', ()=> {
    let state = {
        weatherDetails : {}
    }

    it('SET_WEATHER_DETAILS', ()=> {
        const someData = {
                weather : [
                    {
                        icon : "hh"
                    }
                ]
            }
        weatherDetails.mutations.SET_WEATHER_DETAILS(state,someData)
        expect(state.weatherDetail).toEqual(someData)
    })
})
