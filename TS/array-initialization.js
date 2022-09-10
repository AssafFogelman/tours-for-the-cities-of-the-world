"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCityLsToCityArray = exports.cityArrayFilter = exports.cityArraySort = exports.changeCityArrayValue = exports.cityArray = exports.arrayInitialization = void 0;
const cityClass_model_js_1 = require("./models/cityClass.model.js"); //importing the class
const initialCityArray_js_1 = require("./models/initialCityArray.js");
const ts_cities_index_js_1 = require("./ts-cities-index.js");
const createGallery_js_1 = require("./components/createGallery.js");
const createCarousel_js_1 = require("./components/createCarousel.js");
const createList_js_1 = require("./components/createList.js");
/*
this file creates the array of cities variable.
If there is a valid array in the local storage it puts the value in the variable.
If not, it gives the variable a pre-existing value.
*/
let cityArray;
exports.cityArray = cityArray;
let cityArrayUntouched;
var EResetOptions;
(function (EResetOptions) {
    EResetOptions[EResetOptions["YES"] = 0] = "YES";
    EResetOptions[EResetOptions["NO"] = 1] = "NO";
})(EResetOptions || (EResetOptions = {}));
const changeCityArrayValue = (array) => {
    /* changes cityArray variable */
    exports.cityArray = cityArray = array;
    return cityArray;
};
exports.changeCityArrayValue = changeCityArrayValue;
const cityArraySort = (sortDirection) => {
    /* sorts cityArray by price. Then updates the localstorage. then refreshes the page*/
    cityArray.sort((a, b) => {
        if (!a.price || !b.price)
            return 0;
        if (sortDirection === ts_cities_index_js_1.ESort.ASCENDING) {
            return a.price - b.price;
        }
        if (sortDirection === ts_cities_index_js_1.ESort.DESCENDING) {
            return b.price - a.price;
        }
        return 0;
    });
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    (0, ts_cities_index_js_1.showItems)();
};
exports.cityArraySort = cityArraySort;
const cityArrayFilter = (filterElement) => {
    if (!filterElement)
        return;
    let filteredCityArray = [
        ...cityArray.filter((city) => { var _a; return (_a = city.cityName) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterElement.value.toLowerCase()); }),
    ];
    (0, createGallery_js_1.createGallery)(filteredCityArray);
    (0, createCarousel_js_1.createCarousel)(filteredCityArray);
    (0, createList_js_1.createList)(filteredCityArray);
};
exports.cityArrayFilter = cityArrayFilter;
const fromCityLsToCityArray = (rawLsCityArrayString) => {
    let tempCityArray = JSON.parse(rawLsCityArrayString);
    let newCityArray = [];
    for (let i = 0; i < tempCityArray.length; i++) {
        newCityArray[i] = new cityClass_model_js_1.City(tempCityArray[i].cityName, tempCityArray[i].imageUrl);
    }
    //we need to do this because the local storage does not contain the "City" class functions. this will add the function "appendWeatherData".
    return newCityArray;
};
exports.fromCityLsToCityArray = fromCityLsToCityArray;
const getJsonData = (apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    //the function recieves an Api address and returns an object with the information
    return yield fetch(apiUrl)
        .then((response) => {
        if (!response.ok)
            throw new Error(response.statusText);
        return response.json();
    })
        .catch((errorMessege) => {
        console.error(errorMessege);
        return { errorMessege }; // {errorMessage: ...}
    });
});
const arrayInitialization = (reset = EResetOptions.NO /*its not reseting by default but may change*/) => __awaiter(void 0, void 0, void 0, function* () {
    let lsData = localStorage.getItem("cityArray");
    if (lsData && reset === EResetOptions.NO) {
        //if we don't want to reset and there already is something in the local storage
        exports.cityArray = cityArray = fromCityLsToCityArray(lsData);
        for (let index = 0; index < cityArray.length; index++) {
            let res = yield getJsonData(cityArray[index].apiUrl);
            if (res.errorMessage) {
                console.log(res.errorMessage);
                continue; //move to the next city of the array
            }
            console.log("we have reached cityArray[index].appendWeatherData(res);");
            // console.log("res = ", res);
            cityArray[index].appendWeatherData(res);
            //append apiData, append icon, append temperature, append day/night, append weather status.
            //cityArray[index].setDayStatus(); //is it night or day?
            //cityArray[index].setWeatherStatus(); //what is the weather status?
        }
        return cityArray;
        //now we need to enter valid API data.
    }
    else {
        localStorage.setItem("cityArray", JSON.stringify(initialCityArray_js_1.initialCityArray));
        return initialCityArray_js_1.initialCityArray;
    }
    // let lsCityArray: City[] = JSON.parse(
    //   localStorage.getItem("cityArray") as string
    // );
    // if (!lsCityArray) {
    //   console.log("there is no key named cityArray!");
    // }
});
exports.arrayInitialization = arrayInitialization;
