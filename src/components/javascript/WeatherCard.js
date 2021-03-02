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
            return this.getWeatherDetail.main.temp_max || ''
        },
        getLowTemp:function (){
            return this.getWeatherDetail.main.temp_min || ''
        },
        getFeelsLike:function (){
            return this.getWeatherDetail.main.feels_like || ''
        },
        getMain:function (){
            return this.getWeatherDetail.main.temp || ''
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