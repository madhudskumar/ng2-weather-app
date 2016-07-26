import { Component } from '@angular/core';
import { weather } from './weather.class'
import {el} from "@angular/platform-browser/esm/testing/browser_util";

@Component({
    selector: 'my-app',
    templateUrl: 'app/weatherComponent/weather.html',
    styleUrls:['app/weatherComponent/weather.css'],
})

export class WeatherComponent {
    private city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<weather>;
    public noCityError:string;

    constructor(){
        this.cities = [];
        this.weatherOfCities = [];
        this.city = '';
        this.noCityError = undefined;
    }

    addCity(city:string, $event){
        if($event.keyCode == 13){
            this.noCityError = undefined;
            let weather:weather = this.getWeather(city);

            if(!weather){
                this.noCityError = 'this city does not exists';
                return;
            }

            if(!this.weatherOfCities) this.weatherOfCities.push(weather);

            if(!this.exists(this.weatherOfCities, weather.id)){
                this.weatherOfCities.push(weather);
            }else this.noCityError = 'city already present';

            this.city = '';
        }
    }

    //local functions
    exists = function(cityWeather:Array<weather>, id:number){
        for(let weather of cityWeather){
            if(weather.id === id){
                return true
            }
        }
        return false;
    };

    getWeather = function(city:string){
        if(city.toUpperCase() === 'DVG')
            return new weather(1, 'Davangere', 'rainy');
        else if (city.toUpperCase() === 'WEA')
            return new weather(2, 'wea', 'what is ');
        else return undefined;
    };
}
