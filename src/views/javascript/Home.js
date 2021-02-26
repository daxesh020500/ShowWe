// @ is an alias to /src
import { mapGetters,mapActions } from 'vuex';
import WeatherCard from "@/components/WeatherCard";
export default {
    name: 'Home',
    data(){
        return{
            cityName:""
    }
    },
    computed: mapGetters(['getWeatherDetail']),
    components: {
        WeatherCard
    },
    methods:{
        ...mapActions(['setWeatherDetail']),
        getWeather(){
            this.setWeatherDetail(this.cityName);
        }
    }
}