<template>
  <div class="card">
    <h1 class="city">{{ getWeatherDetail.name }}</h1>
    <p class="description">{{ getWeatherDetail.weather[0].main }}</p>
    <p class="min-max">
      Low:
      {{ (getWeatherDetail.main.temp_min - 273).toFixed(0)}}°C
      High:
      {{ (getWeatherDetail.main.temp_max - 273).toFixed(0)}}°C
      <br>
      Feels Like:
      {{ (getWeatherDetail.main.feels_like - 273).toFixed(0)}}°C
    </p>
    <div class="numbers">
      <div class="temp">
        <span></span><sup class="unit">{{(getWeatherDetail.main.temp - 273).toFixed(0)}}°C</sup>
      </div>
      <div class="icon">
        <img :src="imgUrl" alt="Slow Internet">
      </div>

      <div>
        <table class="measurements">
          <tr>
            <td class="label">Pressure</td>
            <td class="value">{{getWeatherDetail.main.pressure}}hpa</td>
          </tr>
          <tr>
            <td class="label">Humidity</td>
            <td class="value">{{getWeatherDetail.main.humidity}}%</td>
          </tr>
          <tr>
            <td class="label">Wind speed</td>
            <td class="value">{{getWeatherDetail.wind.speed}} kmph</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="../components/javascript/WeatherCard.js" />

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&display=swap");
p {
  margin: 4px 0;
}

p.description {
  font-size: 27px;
}
.min-max {
  margin: 8px 0;
  font-weight: 700;
  font-size: 15px;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

div.card {
  margin: 0 auto;
  flex-direction: column;
  padding: 25px 30px;
  width: fit-content;
  border: 1px solid #D7D7D7;
  border-radius: 15px;
  background-color: antiquewhite;
}

div.numbers div {
  display: inline-block;
  vertical-align: middle;
}
div.numbers .temp {
  font-weight: 300;
  font-size: 96px;
}
div.numbers .temp .unit {
  font-weight: 700;
  font-size: 40px;
  vertical-align: super;
}
div.numbers .icon > img {
  width: 100px;
  margin-top: -20px;
}
div.numbers .measurements tr {
  height: 30px;
}
div.numbers .measurements .label {
  width: 100px;
  color: #777;
}


</style>