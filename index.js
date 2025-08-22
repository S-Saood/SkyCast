const APIkey = "611b9d843142a5a59a4fedf44cf9d725"

const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon") 

async function checkWeather(city) {
  const response  = await fetch(APIurl + city + `&appid=${APIkey} `);

  // checking for any error or invalid city
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

    var data = await response.json();

  // adding Api data to element
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  // for image

  if (data.weather[0].main == "Clouds"){
    weatherIcon.src = "assets/cloud.png"
  } else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "assets/cloudy.png"
  } else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "assets/rainy-day.png"
  }
  // when only give input show the app
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none";
}
  }
  


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value)
})
