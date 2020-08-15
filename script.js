//key = "78d9ec9a014d888e4be9a6e1701493d6"
//base= "api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    const searchForCity = document.getElementById('city');
    const cityName = searchForCity.value;
    apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=78d9ec9a014d888e4be9a6e1701493d6`;
    fetch(apiLink)
        .then(res => {
            return res.json()
        })
        .then(data => displyData(data))
})

function displyData(data) {
    const cityNameHide = document.getElementById('city');
    cityNameHide.value = "";

    let city = document.getElementById("showCity");
    city.innerHTML = `${data.name}, ${data.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerText = `${Math.round(data.main.temp)}`;

    let weatherStatus = document.getElementById('weatherStatus');
    weatherStatus.innerText = data.weather[0].main;

    let icons = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("img").src = icons;
}

