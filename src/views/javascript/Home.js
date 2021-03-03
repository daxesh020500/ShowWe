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
            console.log("Inside the getWeather")
            if(this.cityName !== ''){
                this.setWeatherDetail(this.cityName)
            }
            else{
                window.alert('Please Enter any Value')
            }

        }
    }
}