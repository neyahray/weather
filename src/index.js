import { GetWeather, getCurrentWeather, GetWeekWeather, getDailyWeather, getWeekWeather  } from "./service";
import { changeTabs } from "./tema";

async function main1 () {
    let weatherImage = document.querySelector('.weather-img-main')
    let weatherCelcius = document.querySelector('.celcius-value')
    let weatherRain = document.querySelector('.rain-value')
    let weatherWind = document.querySelector('.wind-value')
    let weatherSnow = document.querySelector('.snow-cm-value')
    let weatherCloud = document.querySelector('.cloud-cover-value')

    changeTabs()

    let currentWeather = await getCurrentWeather()

    weatherCelcius.innerText = 'Сейчас: ' + currentWeather.temperature_2m
    weatherRain.innerText = 'Дождь: ' + (currentWeather.rain ? 'Да' : 'Нет')
    weatherWind.innerText = 'Скорость ветра: ' + currentWeather.windspeed_10m + 'км/ч'
    weatherSnow.innerText = 'Уровень снега: ' + currentWeather.snowfall + 'см'
    weatherCloud.innerText = 'Облачность: ' + currentWeather.cloudcover + '%'

    let date = new Date();
    if ( date.getHours >= 0 && date.getHours <= 12) {
        weatherImage.src = 'assets/солнце.png'
    } else if ( date.getHours > 12 && date.getHours <0) {
        weatherImage.src = 'assets/луна.png'
    }

    if ( weatherRain === 1 ) {
        weatherImage.src = 'assets/дождь.png'
    } else {
        if ( weatherCloud >= '30%' && weatherCloud <= '60%') {
            weatherImage.src = 'assets/солнечно.png'
        } else if ( weatherCloud > '60%' ) {
            weatherImage.src = 'assets/облако.png'
        } else if ( weatherCloud < '30%') {
            weatherImage.src = 'assets/солнце.png'
        }
    }

    if ( weatherSnow >= 3) {
        weatherImage.src = 'assets/снег.png'
    }

}

main1()

//
async function main2 () {
    let forecastList = document.querySelector('.forecast-list')
    let dailyWeather = await getWeekWeather()
    let forecastChildren = forecastList.children

    console.log(dailyWeather)

    for(let i = 0; i < forecastChildren.length; i++) {
        let dailyTemp = forecastChildren[i].querySelector('.daily-temperature')
        let dailyImg = forecastChildren[i].querySelector('.weather-img')
        let dailyDate = forecastChildren[i].querySelector('.daily-date')
        
        dailyTemp.innerText = dailyWeather.daily.apparent_temperature_max[i]
        
    }
}

main2()