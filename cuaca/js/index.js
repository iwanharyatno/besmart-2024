const mainWeather = document.getElementById('cuaca-utama-wind');


async function getWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=purwokerto&appid=d8b21c07ae373d57cedb303d944e393e';

    return await fetch(url, {
        method: 'GET',
    })
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON from the response
        return response.json();
    }).then((result) => {
        mainWeather.innerText = "hello";
        console.log(result);
    });    
}

getWeather()

// const result = getWeather();

// console.log(result);