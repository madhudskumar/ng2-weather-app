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
var weather_service_1 = require('./weather.service');
var WeatherComponent = (function () {
    function WeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.cities = [];
        this.weatherOfCities = [];
        this.city = '';
        this.noCityError = undefined;
    }
    WeatherComponent.prototype.addCity = function (city, $event) {
        var _this = this;
        if ($event.keyCode == 13) {
            this.noCityError = undefined;
            this._weatherService.getWeather(city)
                .subscribe(function (weather) {
                if (weather) {
                    console.log(weather);
                    _this.weatherOfCities.push(weather);
                    _this.noCityError = undefined;
                }
                else {
                    _this.noCityError = 'no weather for' + city;
                }
            });
            // if(!weather){
            //     this.noCityError = 'this city does not exists';
            //     return;
            // }
            //
            // if(!this.weatherOfCities) this.weatherOfCities.push(weather);
            //
            // if(!this._weatherService.exists(this.weatherOfCities, weather.id)){
            //     this.weatherOfCities.push(weather);
            // }else this.noCityError = 'city already present';
            this.city = '';
        }
    };
    WeatherComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/weatherComponent/weather.html',
            styleUrls: ['app/weatherComponent/weather.css'],
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], WeatherComponent);
    return WeatherComponent;
}());
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map