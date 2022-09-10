var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { City } from "./models/cityClass.model.js";
import { initialCityArray } from "./models/initialCityArray.js";
import { ESort, showItems } from "./ts-cities-index.js";
import { createGallery } from "./components/createGallery.js";
import { createCarousel } from "./components/createCarousel.js";
import { createList } from "./components/createList.js";
let cityArray;
let cityArrayUntouched;
var EResetOptions;
(function (EResetOptions) {
    EResetOptions[EResetOptions["YES"] = 0] = "YES";
    EResetOptions[EResetOptions["NO"] = 1] = "NO";
})(EResetOptions || (EResetOptions = {}));
const changeCityArrayValue = (array) => {
    cityArray = array;
    return cityArray;
};
const cityArraySort = (sortDirection) => {
    cityArray.sort((a, b) => {
        if (!a.price || !b.price)
            return 0;
        if (sortDirection === ESort.ASCENDING) {
            return a.price - b.price;
        }
        if (sortDirection === ESort.DESCENDING) {
            return b.price - a.price;
        }
        return 0;
    });
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    showItems();
};
const cityArrayFilter = (filterElement) => {
    if (!filterElement)
        return;
    let filteredCityArray = [
        ...cityArray.filter((city) => { var _a; return (_a = city.cityName) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterElement.value.toLowerCase()); }),
    ];
    createGallery(filteredCityArray);
    createCarousel(filteredCityArray);
    createList(filteredCityArray);
};
const fromCityLsToCityArray = (rawLsCityArrayString) => {
    let tempCityArray = JSON.parse(rawLsCityArrayString);
    let newCityArray = [];
    for (let i = 0; i < tempCityArray.length; i++) {
        newCityArray[i] = new City(tempCityArray[i].cityName, tempCityArray[i].imageUrl);
    }
    return newCityArray;
};
const getJsonData = (apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(apiUrl)
        .then((response) => {
        if (!response.ok)
            throw new Error(response.statusText);
        return response.json();
    })
        .catch((errorMessege) => {
        console.error(errorMessege);
        return { errorMessege };
    });
});
const arrayInitialization = (reset = EResetOptions.NO) => __awaiter(void 0, void 0, void 0, function* () {
    let lsData = localStorage.getItem("cityArray");
    if (lsData && reset === EResetOptions.NO) {
        cityArray = fromCityLsToCityArray(lsData);
        for (let index = 0; index < cityArray.length; index++) {
            let res = yield getJsonData(cityArray[index].apiUrl);
            if (res.errorMessage) {
                console.log(res.errorMessage);
                continue;
            }
            console.log("we have reached cityArray[index].appendWeatherData(res);");
            cityArray[index].appendWeatherData(res);
        }
        return cityArray;
    }
    else {
        localStorage.setItem("cityArray", JSON.stringify(initialCityArray));
        return initialCityArray;
    }
});
export { arrayInitialization, cityArray, changeCityArrayValue, cityArraySort, cityArrayFilter, fromCityLsToCityArray, };
