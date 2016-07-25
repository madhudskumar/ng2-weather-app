import {iWeather} from './weather.interface'

export class weather implements iWeather{
    constructor(
        public id:number,
        public city:string,
        public main:string,
        public description?:string
    ){}

}