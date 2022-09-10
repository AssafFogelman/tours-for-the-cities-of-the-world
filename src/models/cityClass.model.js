import { citiesCordinates } from "./JSON/cities and cordinates.js";
import { cityImageArray } from "./JSON/‏‏city-photos.js";
import { randomCityPhotos } from "./JSON/random city-photos.js";
import { EDayStatus } from "./weatherStatus.js";
import { weatherStatusArray } from "./weatherStatus.js";
let priceReference = {
    currentLocation: "Jerusalem",
    longitude: 35.2007,
    latitude: 31.7857,
    minPrice: 50,
    maxPrice: 1400,
};
export class City {
    constructor(cityName, imageUrl = "") {
        var _a;
        this.apiData = {};
        this.dayStatus = undefined;
        this.weatherCode = undefined;
        this.weatherDescription = undefined;
        this.weatherIcon = undefined;
        this.currentTemperature = undefined;
        let selectedCity = citiesCordinates.find((city) => city.city_name_ascii.toLowerCase() === (cityName === null || cityName === void 0 ? void 0 : cityName.toLowerCase()));
        if (!selectedCity) {
            return;
        }
        this.cityName = selectedCity.city_name_ascii;
        this.longitude = +selectedCity.longitude;
        this.latitude = +selectedCity.latitude;
        this.price =
            Math.floor((Math.sqrt(Math.pow((this.latitude - priceReference.latitude) * 2, 2) +
                Math.pow(this.longitude - priceReference.longitude, 2)) *
                priceReference.maxPrice) /
                (360 * Math.sqrt(2))) - 0.01;
        if (this.price < priceReference.minPrice) {
            this.price = priceReference.minPrice - 0.01;
        }
        this.apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Europe%2FMoscow`;
        if (imageUrl) {
            this.imageUrl = imageUrl;
        }
        else {
            let photoFromDatabase = (_a = cityImageArray.find((city) => { var _a; return city.cityName.toLowerCase() === ((_a = this.cityName) === null || _a === void 0 ? void 0 : _a.toLowerCase()); })) === null || _a === void 0 ? void 0 : _a.cityPhoto;
            if (photoFromDatabase) {
                this.imageUrl = photoFromDatabase;
            }
            else {
                this.imageUrl =
                    randomCityPhotos[Math.floor(Math.random() * randomCityPhotos.length)];
            }
        }
    }
    appendWeatherData(apiData) {
        console.log("appendWeatherData was executed!");
        this.apiData = apiData;
        console.log("apiData", apiData.hourly.time);
        let currentDate = new Date();
        let indexInApi = apiData.hourly.time.findIndex((date) => {
            return new Date(date).getHours() === currentDate.getHours();
        });
        console.log("indexInApi", indexInApi);
        this.weatherCode = apiData.hourly.weathercode[indexInApi];
        console.log("this.weatherCode", this.weatherCode);
        let laterThanSunrise = currentDate.getTime() - new Date(apiData.daily.sunrise[0]).getTime();
        let laterThanSunset = currentDate.getTime() - new Date(apiData.daily.sunset[0]).getTime();
        if (laterThanSunrise > 0 && laterThanSunset < 0) {
            this.dayStatus = EDayStatus.DAY;
        }
        else {
            this.dayStatus = EDayStatus.NIGHT;
        }
        console.log("weatherStatusArray", weatherStatusArray);
        let weatherStatusCell = weatherStatusArray.find((weatherStatus) => {
            return (weatherStatus.code === this.weatherCode &&
                weatherStatus.dayStatus === this.dayStatus);
        });
        this.weatherIcon = weatherStatusCell === null || weatherStatusCell === void 0 ? void 0 : weatherStatusCell.iconUrl;
        this.weatherDescription = weatherStatusCell === null || weatherStatusCell === void 0 ? void 0 : weatherStatusCell.description;
        console.log("this.weatherIcon", this.weatherIcon);
        this.currentTemperature = apiData.hourly.temperature_2m[indexInApi];
    }
}
