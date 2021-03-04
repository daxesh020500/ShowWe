<template>
  <div class="container">
    <img src="../assets/img.png" alt="Logo">
    <div class="search">
      <input  v-model="cityName" class="searchBox" placeholder="Search for a city" required type="text">
      <button class="button" type="button" @click="getWeather()">Search</button>
      <span class="msg"></span>
    </div>
    <WeatherCard v-if="getWeatherDetail"/>
  </div>
</template>

<script src="../views/javascript/Home.js"/>

<style scoped>
.container div {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  height: 220px;
  border: 5px dotted dodgerblue;
  border-radius: 50%;
  border-collapse: collapse;
}

.searchBox {
  outline: 0;
  line-height: 42px;
  padding: 0 16px;
  background-color: bisque;
  color: darkorchid;
  border: 0;
  align-self: center;
  border-radius: 4px 0 0 4px;
  width: 300px;
  margin-bottom: 5px;
}

.searchBox:focus {
  outline: 0;
  background-color: azure;
}

.button {
  background-color: #42b983;
  border: 2px solid greenyellow;
  border-radius: 30%;
  align-self: center;
  text-align: center;
  line-height: 42px;
  color: #FFF;
  font-size: 16px;
  text-rendering: auto;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: background-color .4s ease;
  transition: background-color .4s ease;
}

.button:hover {
  background-color: rgba(0, 150, 136, 0.8);
}
</style>
