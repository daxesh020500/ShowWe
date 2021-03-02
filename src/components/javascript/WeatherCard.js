import {mapGetters} from "vuex";
export default {
    name: "WeatherCard",
    computed: {
        ...mapGetters(['getWeatherDetail', "getWeatherIconId"]),
        imgUrl: function(){
            return "http://openweathermap.org/img/wn/" + this.getWeatherIconId +"@2x.png"
        },
        getName:function (){
            return this.getWeatherDetail.name || ''
        },
        getDesc:function (){
            return this.getWeatherDetail.weather[0].main || ''
        },
        getHighTemp:function (){
            return (this.getWeatherDetail.main.temp_max).toFixed(0) || ''
        },
        getLowTemp:function (){
            return (this.getWeatherDetail.main.temp_min).toFixed(0) || ''
        },
        getFeelsLike:function (){
            return (this.getWeatherDetail.main.feels_like).toFixed(0) || ''
        },
        getMain:function (){
            return (this.getWeatherDetail.main.temp).toFixed(0) || ''
        },
        getPressure:function (){
            return this.getWeatherDetail.main.pressure || ''
        },
        getHumidity:function (){
            return this.getWeatherDetail.main.humidity || ''
        },
        getSpeed:function (){
            return this.getWeatherDetail.wind.speed || ''
        }
    },
    data(){
        return{
        }

    }
}