"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const cities_and_cordinates_js_1 = require("./JSON/cities and cordinates.js");
const __city_photos_js_1 = require("./JSON/\u200F\u200Fcity-photos.js");
const random_city_photos_js_1 = require("./JSON/random city-photos.js");
const weatherStatus_js_1 = require("./weatherStatus.js");
const weatherStatus_js_2 = require("./weatherStatus.js");
let priceReference = {
    //how do we calculate the price
    currentLocation: "Jerusalem",
    longitude: 35.2007,
    latitude: 31.7857,
    minPrice: 50,
    maxPrice: 1400, //the cost of flight from israel to Toronto, Canada, + hotel+ 200$ (for a guided tour)
};
class City {
    constructor(cityName, imageUrl = "") {
        var _a;
        this.apiData = {};
        this.dayStatus = undefined;
        this.weatherCode = undefined;
        this.weatherDescription = undefined;
        this.weatherIcon = undefined;
        this.currentTemperature = undefined;
        //image Url is optional. if it is not entered, the constructor will search the image database and if that doesnt work, it will append a "random city" image
        let selectedCity = cities_and_cordinates_js_1.citiesCordinates.find((city) => city.city_name_ascii.toLowerCase() === (cityName === null || cityName === void 0 ? void 0 : cityName.toLowerCase())); //looking for coordinates in city database
        if (!selectedCity) {
            return;
        } //if the city can't be found it renders everything undefined.
        this.cityName = selectedCity.city_name_ascii; //so you get the name with a capital letter
        this.longitude = +selectedCity.longitude;
        this.latitude = +selectedCity.latitude;
        this.price =
            Math.floor((Math.sqrt(Math.pow((this.latitude - priceReference.latitude) * 2, 2) +
                Math.pow(this.longitude - priceReference.longitude, 2)) *
                priceReference.maxPrice) /
                (360 * Math.sqrt(2))) - 0.01;
        /* the price is determined by the distance*/
        /* times 2 becase it has only 180 degrees while longitute has 360 degrees */
        /* (360*Math.sqrt(2)) - this is the maximum length in coordinats possible (after we made the latitude to also have 360 degrees my multiplying it with 2) */
        if (this.price < priceReference.minPrice) {
            this.price = priceReference.minPrice - 0.01;
        } //determining a minimum price
        this.apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Europe%2FMoscow`;
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
        else {
            let photoFromDatabase = (_a = __city_photos_js_1.cityImageArray.find((city) => { var _a; return city.cityName.toLowerCase() === ((_a = this.cityName) === null || _a === void 0 ? void 0 : _a.toLowerCase()); })) === null || _a === void 0 ? void 0 : _a.cityPhoto;
            if (photoFromDatabase) {
                //if you can find a photo from the photo database, append. else append "random city" photo
                this.imageUrl = photoFromDatabase;
            }
            else {
                this.imageUrl =
                    random_city_photos_js_1.randomCityPhotos[Math.floor(Math.random() * random_city_photos_js_1.randomCityPhotos.length)];
                //if there is no photo of the city in the database, it puts some random photo of random cities.
            }
        }
    }
    appendWeatherData(apiData /* typescript is not letting me use "object" for some reason. ask later */) {
        console.log("appendWeatherData was executed!");
        this.apiData = apiData;
        console.log("apiData", apiData.hourly.time);
        let currentDate = new Date();
        let indexInApi = apiData.hourly.time.findIndex((date) => {
            return new Date(date).getHours() === currentDate.getHours();
            /*since the data is being updated all the time, we only care about the first 24H (cells) of the array.
            so we simply compare the hours of both dates. */
        });
        //we get the index with the time so we can find other variables.
        //we need to get a certain time template like: 2022-09-1T12:00
        //console.log("indexInApi", indexInApi);
        //weatherCode
        console.log("indexInApi", indexInApi);
        this.weatherCode = apiData.hourly.weathercode[indexInApi];
        console.log("this.weatherCode", this.weatherCode);
        //day or night
        let laterThanSunrise = currentDate.getTime() - new Date(apiData.daily.sunrise[0]).getTime();
        /*time in miliseconds after sunrise */
        let laterThanSunset = currentDate.getTime() - new Date(apiData.daily.sunset[0]).getTime();
        /*time in miliseconds after sunset */
        if (laterThanSunrise > 0 && laterThanSunset < 0) {
            this.dayStatus = weatherStatus_js_1.EDayStatus.DAY;
        }
        else {
            this.dayStatus = weatherStatus_js_1.EDayStatus.NIGHT;
        }
        //weather icon
        console.log("weatherStatusArray", weatherStatus_js_2.weatherStatusArray); //shows the weathercodes and day/night and icon URL
        let weatherStatusCell = weatherStatus_js_2.weatherStatusArray.find((weatherStatus) => {
            return (weatherStatus.code === this.weatherCode &&
                weatherStatus.dayStatus === this.dayStatus);
        });
        this.weatherIcon = weatherStatusCell === null || weatherStatusCell === void 0 ? void 0 : weatherStatusCell.iconUrl;
        this.weatherDescription = weatherStatusCell === null || weatherStatusCell === void 0 ? void 0 : weatherStatusCell.description;
        ///not working!!! why?!!!
        //console.log("weatherStatusCell", weatherStatusCell);
        console.log("this.weatherIcon", this.weatherIcon);
        // ?.iconUrl;
        //currentTemperature
        this.currentTemperature = apiData.hourly.temperature_2m[indexInApi];
    }
}
exports.City = City;
