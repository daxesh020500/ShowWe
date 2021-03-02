import axios from "axios";
const state = {
    weatherDetail: {}
};
const getters = {
    getWeatherDetail:(state) => state.weatherDetail,
    getWeatherIconId: (state) => state.weatherDetail.weather[0].icon
};
const actions = {
    setWeatherDetail({commit} ,cityName){
        const config = {
            'method': 'GET',
            'url':'https://api.openweathermap.org/data/2.5/weather',
            params:{
                'q':cityName,
                'appid':'cefd71548a5fa5681a173bd95d5b7c70',
                'units':'metric'
            }
        }
        axios.request(config)
            .then(response => {
                     commit('SET_WEATHER_DETAILS',response.data)
                 })
            .catch(() => window.alert("City Not Found"))
    }
};
const mutations = {
    SET_WEATHER_DETAILS:(state,weatherDetail) => state.weatherDetail = weatherDetail
};
export default {
    state,
    getters,
    actions,
    mutations
};
