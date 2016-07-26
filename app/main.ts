import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { WeatherComponent } from './weatherComponent/weather.component';

bootstrap(<any>WeatherComponent,[
    HTTP_PROVIDERS
]);
