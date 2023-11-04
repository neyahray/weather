export async function getWeather() {
    try {
        let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,rain,snowfall,cloudcover,windspeed_10m&hourly=temperature_2m');
        let result = await response.json();
    
        return result;   
    } catch(e) {
        return String(e)
    }
};

export async function getCurrentWeather() {
    let circle = document.querySelector('.circle');
    let loader = document.querySelector('.loader');
    let id = setInterval(changeColor, 500)

    function changeColor() {
        if(loader.className !== 'loader') {
            clearInterval(id);
        } else {
            const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
            circle.style.borderColor = randomColor;
            circle.style.borderTopColor = '#fff';
        };
    };

    let response = await getWeather();
    let current = null;
    
    if(typeof response === 'string') {
        current = response;
    } else {
        current = response.current;
        loader.className += ' disabled';
    }

    return current;
};

//
export async function getWeekWeather() {
    try {
        let response2 = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,rain_sum,snowfall_sum,windspeed_10m_max&timezone=auto');
        let result2 = await response2.json();
    
        return result2;   
    } catch(e) {
        return String(e)
    }
};

export async function getDailyWeather() {
    let response2 = await getWeather();
    let current2 = null;
    
    if(typeof response2 === 'string') {
        current2 = response2;
    } else {
        current2 = response2.current2;
    }

    return current2;
};

