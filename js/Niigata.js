// 新潟(150000)の予報を取得
let url_niigata = "https://www.jma.go.jp/bosai/forecast/data/forecast/150000.json";

fetch(url_niigata)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("新潟:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_tokyo").src = "https://www.jma.go.jp/bosai/forecast/img/"+ area.weatherCodes[1] +".svg";
        document.getElementById("weather_text_tokyo").textContent = area.weathers[1];
        document.getElementById("weather_degrees_tokyo").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });