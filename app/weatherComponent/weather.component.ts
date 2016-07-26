import { Component } from '@angular/core';
import {weather} from './weather.class'
import {WeatherService} from './weather.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/weatherComponent/weather.html',
    styleUrls:['app/weatherComponent/weather.css'],
    providers:[WeatherService]
})

export class WeatherComponent {
    private city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<weather>;
    public noCityError:string;

    constructor(
        private _weatherService:WeatherService
    ){
        this.cities = [];
        this.weatherOfCities = [];
        this.city = '';
        this.noCityError = undefined;
    }

    addCity(city:string, $event){
        if($event.keyCode == 13){
            this.noCityError = undefined;
            this._weatherService.getWeather(city)
                .subscribe(weather => {
                    if(weather){
                        console.log(weather);
                        this.weatherOfCities.push(weather);
                        this.noCityError = undefined;
                    }else{
                        this.noCityError = 'no weather for' + city;
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
    }
}
