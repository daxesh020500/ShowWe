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
            return (this.getWeatherDetail.main.temp_max) || 0
        },
        getLowTemp:function (){
            return (this.getWeatherDetail.main.temp_min)|| 0
        },
        getFeelsLike:function (){
            return (this.getWeatherDetail.main.feels_like) || 0
        },
        getMain:function (){
            return (this.getWeatherDetail.main.temp)|| 0
        },
        getPressure:function (){
            return this.getWeatherDetail.main.pressure || 0
        },
        getHumidity:function (){
            return this.getWeatherDetail.main.humidity || 0
        },
        getSpeed: function (){
            return this.getWeatherDetail.wind.speed || 0
        }
    },
    data(){
        return{
        }

    }
}