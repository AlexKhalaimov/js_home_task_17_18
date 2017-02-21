$(function () {
    var urlPB = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    var date = new Date();
    var time = date.toLocaleString(options);
    var options = {
        weekday : 'short',
        day : 'numeric',
        month : 'long',
        year : 'long',
        hour : 'numeric',
        minute : 'numeric'
    };
    $('#current_date').append(time);
    $.getJSON(
        urlPB, function (data) {


                var eur_buy,
                    eur_sale,
                    rur_buy,
                    rur_sale,
                    usd_buy,
                    usd_sale;


                     eur_buy = parseFloat(data[0].buy).toFixed(2);
                     eur_sale = parseFloat(data[0].sale).toFixed(2);
                     rur_buy = parseFloat(data[1].buy).toFixed(2);
                     rur_sale = parseFloat(data[1].sale).toFixed(2);
                     usd_buy = parseFloat(data[2].buy).toFixed(2);
                     usd_sale = parseFloat(data[2].sale).toFixed(2);


                $(".rur .buy").append(rur_buy);
                $('.rur .sale').append(rur_sale);
                $('.usd .buy').append(usd_buy);
                $('.usd .sale').append(usd_sale);
                $('.eur .buy').append(eur_buy);
                $('.eur .sale').append(eur_sale);


        }
    );
});
;$(function () {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&units=metric&APPID=edfe6348fe52e5ac884f9fe6b8a4e34b';
    var date = new Date();
    var time = new Intl.DateTimeFormat("ua", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"}).format(date);

    $('#new_date').append(time);
    $('#button').on('click', getWeather);
    function getWeather() {
        $.getJSON( url, function (data) {
            var humidity,
                pressure,
                temp,
                wind_speed,
                wind_direction,
                hg_pressure;

            var mm_HG = 0.75006375541921;

                var north = {
                    name : 'N',
                    value : 0
                };
                var northEast = {
                    name : 'NE',
                    value : 22.5
                };
                var east = {
                    name : 'E',
                    value : 67.5
                };
                var southEast = {
                    name : 'SE',
                    value : 112.5
                };
                var south = {
                    name : 'S',
                    value : 157.5
                };
                var southWest = {
                    name : 'SW',
                    value : 202.5
                };
                var west = {
                    name : 'W',
                    value : 247.5
                };
                var northWest = {
                    name : 'NW',
                    value : 295.5
                };
                var north2 = {
                    name : 'N',
                    value : 337.5
                };

                var newName = "";

                var directions = [north, northEast, east, southEast, south,
                southWest, west, northWest, north2];

                humidity = data.main.humidity;
                pressure = data.main.pressure;
                temp = data.main.temp;
                wind_speed = data.wind.speed;
                wind_direction = parseFloat(data.wind.deg).toFixed(1);

                hg_pressure = (pressure*mm_HG).toFixed();

                for (var i = 0; i < directions.length; i++) {
                    if (wind_direction>=directions[i].value) {

                        newName = directions[i].name;
                    }
                }

                $('#humidity').append(humidity);
                $('#pressure').append(hg_pressure);
                $('#temp').append(temp);
                $('#wind_speed').append(wind_speed);
                $('#wind_direct').append(newName);


        }

    );
    }

});
