"use strict";
var weather = (function () {
    function weather(id, city, main, description) {
        this.id = id;
        this.city = city;
        this.main = main;
        this.description = description;
    }
    return weather;
}());
exports.weather = weather;
//# sourceMappingURL=weather.class.js.map