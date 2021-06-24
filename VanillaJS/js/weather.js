function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}

function onGeoError() {
    alert("위치 정보를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);