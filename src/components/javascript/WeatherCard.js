import {mapGetters} from "vuex";

export default {
    name: "WeatherCard",
    computed: {
        ...mapGetters(['getWeatherDetail', "getWeatherIconId"]),
        imgUrl: function(){
            return "http://openweathermap.org/img/wn/" + this.getWeatherIconId +"@2x.png"
        }
    },
    data(){
        return{
        }
    }

}