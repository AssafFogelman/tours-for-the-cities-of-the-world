import { citiesCordinates } from "./JSON/cities and cordinates.js";
import { cityImageArray } from "./JSON/‏‏city-photos.js";
import { randomCityPhotos } from "./JSON/random city-photos.js";
import { EDayStatus } from "./weatherStatus.js";
import { weatherStatusArray } from "./weatherStatus.js";

let priceReference = {
  //how do we calculate the price
  currentLocation: "Jerusalem",
  longitude: 35.2007,
  latitude: 31.7857,
  minPrice: 50,
  maxPrice: 1400, //the cost of flight from israel to Toronto, Canada, + hotel+ 200$ (for a guided tour)
};

export class City {
  cityName: string | undefined;
  longitude: number | undefined;
  latitude: number | undefined;
  price;
  apiUrl;
  imageUrl;
  apiData = {};
  dayStatus: EDayStatus | undefined = undefined;
  weatherCode: number | undefined = undefined;
  weatherDescription: string | undefined = undefined;
  weatherIcon: string | undefined = undefined;
  currentTemperature: string | undefined = undefined;

  constructor(cityName: string | undefined, imageUrl: string = "") {
    //image Url is optional. if it is not entered, the constructor will search the image database and if that doesnt work, it will append a "random city" image
    let selectedCity = citiesCordinates.find(
      (city) => city.city_name_ascii.toLowerCase() === cityName?.toLowerCase()
    ); //looking for coordinates in city database

    if (!selectedCity) {
      return;
    } //if the city can't be found it renders everything undefined.
    this.cityName = selectedCity.city_name_ascii; //so you get the name with a capital letter
    this.longitude = +selectedCity.longitude;
    this.latitude = +selectedCity.latitude;
    this.price =
      Math.floor(
        (Math.sqrt(
          Math.pow((this.latitude - priceReference.latitude) * 2, 2) +
            Math.pow(this.longitude - priceReference.longitude, 2)
        ) *
          priceReference.maxPrice) /
          (360 * Math.sqrt(2))
      ) - 0.01;

    /* the price is determined by the distance*/
    /* times 2 becase it has only 180 degrees while longitute has 360 degrees */
    /* (360*Math.sqrt(2)) - this is the maximum length in coordinats possible (after we made the latitude to also have 360 degrees my multiplying it with 2) */
    if (this.price < priceReference.minPrice) {
      this.price = priceReference.minPrice - 0.01;
    } //determining a minimum price

    this.apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Europe%2FMoscow`;
    if (imageUrl) {
      this.imageUrl = imageUrl;
    } else {
      let photoFromDatabase = cityImageArray.find(
        (city) => city.cityName.toLowerCase() === this.cityName?.toLowerCase()
      )?.cityPhoto;
      if (photoFromDatabase) {
        //if you can find a photo from the photo database, append. else append "random city" photo
        this.imageUrl = photoFromDatabase;
      } else {
        this.imageUrl =
          randomCityPhotos[Math.floor(Math.random() * randomCityPhotos.length)];
        //if there is no photo of the city in the database, it puts some random photo of random cities.
      }
    }
  }

  appendWeatherData(
    apiData: any /* typescript is not letting me use "object" for some reason. ask later */
  ): void {
    console.log("appendWeatherData was executed!");

    this.apiData = apiData;
    console.log("apiData", apiData.hourly.time);
    let currentDate = new Date();
    let indexInApi = apiData.hourly.time.findIndex((date: string) => {
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
    let laterThanSunrise =
      currentDate.getTime() - new Date(apiData.daily.sunrise[0]).getTime();
    /*time in miliseconds after sunrise */

    let laterThanSunset =
      currentDate.getTime() - new Date(apiData.daily.sunset[0]).getTime();
    /*time in miliseconds after sunset */
    if (laterThanSunrise > 0 && laterThanSunset < 0) {
      this.dayStatus = EDayStatus.DAY;
    } else {
      this.dayStatus = EDayStatus.NIGHT;
    }

    //weather icon
    console.log("weatherStatusArray", weatherStatusArray); //shows the weathercodes and day/night and icon URL
    let weatherStatusCell = weatherStatusArray.find((weatherStatus) => {
      return (
        weatherStatus.code === this.weatherCode &&
        weatherStatus.dayStatus === this.dayStatus
      );
    });
    this.weatherIcon = weatherStatusCell?.iconUrl;
    this.weatherDescription = weatherStatusCell?.description;
    ///not working!!! why?!!!

    //console.log("weatherStatusCell", weatherStatusCell);
    console.log("this.weatherIcon", this.weatherIcon);
    // ?.iconUrl;

    //currentTemperature

    this.currentTemperature = apiData.hourly.temperature_2m[indexInApi];
  }
}
