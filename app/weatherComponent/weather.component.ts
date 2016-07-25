import { Component } from '@angular/core';
import { weather } from './weather.class'

@Component({
    selector: 'my-app',
    templateUrl: 'app/weatherComponent/weather.html',
    styleUrls:['app/weatherComponent/weather.css'],
})

export class WeatherComponent {
    private city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<weather>;

    constructor(){
        this.cities = [];
        this.weatherOfCities = [];
        this.city = '';
    }

    addCity(city:string, $event){
        if($event.keyCode == 13){
            let weather:weather = this.getWeather(city);

            console.log(weather);

            if(!this.exists(this.weatherOfCities, weather.id)){
                if(!this.weatherOfCities.indexOf(weather))
                    this.weatherOfCities.push(weather);

            }

            this.city = '';
        }
    }

    //local functions
    exists = function(cityWeather:Array<weather>, id:number){
        for(let weather of cityWeather){
            console.log(weather);
            if(weather.id === id){
                return true
            }
        }

        return false;
    };

    getWeather = function(city:string){
        if(city.toUpperCase() === 'DVG'){
            return new weather(1, 'Davangere', 'rainy');
        }else return new weather(2, 'wea', 'sad');
    };
}
