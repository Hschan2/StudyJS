const APP_KEY = "a03004bf971234fd4cb532f6df20b7af";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}˚ `;
    }); // URL fetch -> response -> data 추출
}

function onGeoError() {
    alert("위치 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);