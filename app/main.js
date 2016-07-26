"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var weather_component_1 = require('./weatherComponent/weather.component');
platform_browser_dynamic_1.bootstrap(weather_component_1.WeatherComponent, [
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map