"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weather_class_1 = require('./weather.class');
var WeatherComponent = (function () {
    function WeatherComponent() {
        //local functions
        this.exists = function (cityWeather, id) {
            for (var _i = 0, cityWeather_1 = cityWeather; _i < cityWeather_1.length; _i++) {
                var weather_1 = cityWeather_1[_i];
                console.log(weather_1);
                if (weather_1.id === id) {
                    return true;
                }
            }
            return false;
        };
        this.getWeather = function (city) {
            if (city.toUpperCase() === 'DVG') {
                return new weather_class_1.weather(1, 'Davangere', 'rainy');
            }
            else
                return new weather_class_1.weather(2, 'wea', 'sad');
        };
        this.cities = [];
        this.weatherOfCities = [];
        this.city = '';
    }
    WeatherComponent.prototype.addCity = function (city, $event) {
        if ($event.keyCode == 13) {
            var weather_2 = this.getWeather(city);
            console.log(weather_2);
            if (!this.exists(this.weatherOfCities, weather_2.id)) {
                if (!this.weatherOfCities.indexOf(weather_2))
                    this.weatherOfCities.push(weather_2);
            }
            this.city = '';
        }
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/weatherComponent/weather.html',
            styleUrls: ['app/weatherComponent/weather.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map