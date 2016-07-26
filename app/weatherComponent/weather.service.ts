import {Injectable} from '@angular/core';
import {weather} from './weather.class';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService{
    weatherApiUrl:string;
    appId:string;

    constructor(
        private _http:Http
    ){
        this.weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.appId = '&appid=5eca1bb9b4183218679a40214432960d';
    }

    exists(cityWeather:Array<weather>, id:number){
        for(let weather of cityWeather){
            if(weather.id === id){
                return true
            }
        }
        return false;
    };


    getWeather(city:string){
        return new Observable(observable => {
            this._http.get(this.getWeatherUrl(city))
                .map(res => res.json())
                .subscribe(res => {
                    let weather:weather = res.weather[0];
                    weather.city = city;
                    observable.next(weather);
                })
        })
    };

    //localFunc
    getWeatherUrl = function(city:string){
        return this.weatherApiUrl + city + this.appId;
    }
}