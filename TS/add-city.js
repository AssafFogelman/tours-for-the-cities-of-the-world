"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cityClass_model_js_1 = require("./models/cityClass.model.js");
const cities_and_cordinates_js_1 = require("./models/JSON/cities and cordinates.js");
const initialCityArray_js_1 = require("./models/initialCityArray.js");
const containerEl = document.querySelector(".input-container");
const formEl = document.querySelector("#search");
const dropEl = document.querySelector(".drop");
let chosenCity;
const fromCityLsToCityArray = (rawLsCityArrayString) => {
    if (!rawLsCityArrayString) {
        rawLsCityArrayString = JSON.stringify(initialCityArray_js_1.initialCityArray);
    }
    let tempCityArray = JSON.parse(rawLsCityArrayString);
    let newCityArray = [];
    for (let i = 0; i < tempCityArray.length; i++) {
        newCityArray[i] = new cityClass_model_js_1.City(tempCityArray[i].cityName, tempCityArray[i].imageUrl);
    }
    //we need to do this because the local storage does not contain the "City" class functions. this will add the function "appendWeatherData".
    return newCityArray;
};
let dataFromLS = localStorage.getItem("cityArray");
let cityArray2 = fromCityLsToCityArray(dataFromLS);
const handleButtonSelection = (chosenCity) => {
    //if the chosen city already exists, you will not be able to add it.
    //if it doesn't, you will not be able to remove it.
    const addCityButton = document.getElementById("add-city-button");
    const changeCityImageButton = document.getElementById("change-image-button");
    const removeCityButton = document.getElementById("remove-city-button");
    if (!chosenCity)
        return;
    if (cityArray2.find((city) => {
        var _a;
        return ((_a = city.cityName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === chosenCity.cityName.toLowerCase();
    })
    /*the chosen city already exists in cityArray2*/
    ) {
        console.log("the city already exists in the array");
        if (!changeCityImageButton)
            return;
        changeCityImageButton.classList.remove("d-none");
        changeCityImageButtonEventListener(changeCityImageButton);
        if (!removeCityButton)
            return;
        removeCityButton.classList.remove("d-none");
        removeCityButtonEventListener(removeCityButton);
    }
    else {
        console.log("the city does not exist in the array");
        if (!addCityButton)
            return;
        addCityButton.classList.remove("d-none");
        addCityEventListener(addCityButton, chosenCity);
        if (!changeCityImageButton)
            return;
        changeCityImageButton.classList.remove("d-none");
        changeCityImageButtonEventListener(changeCityImageButton);
    }
};
const hideButtons = () => {
    const addCityButton = document.getElementById("add-city-button");
    const changeCityImageButton = document.getElementById("change-image-button");
    const removeCityButton = document.getElementById("remove-city-button");
    const image = document.getElementById("imgId");
    if (!addCityButton)
        return;
    addCityButton.classList.add("d-none");
    if (!changeCityImageButton)
        return;
    changeCityImageButton.classList.add("d-none");
    if (!removeCityButton)
        return;
    removeCityButton.classList.add("d-none");
    image === null || image === void 0 ? void 0 : image.remove();
};
const formHandler = (e) => {
    if (!e.target)
        return;
    const userInput = e.target.value.toLowerCase();
    const showCityDiv = document.querySelector("#show-city");
    if (!showCityDiv)
        return;
    if (!dropEl)
        return;
    if (userInput.length === 0) {
        dropEl.style.height = "0";
        return (dropEl.innerHTML = "");
    }
    let aCityWasChosen = cities_and_cordinates_js_1.citiesCordinates.find((city) => city.city_name_ascii.toLowerCase() === userInput.toLowerCase());
    //aCityWasChosen receives the attributes of the chosen city from the grand 40,000 cities DB. but not all attributes.
    //so we will create a new city with a "City" class.
    if (aCityWasChosen) {
        chosenCity = new cityClass_model_js_1.City(aCityWasChosen.city_name_ascii);
        showCityDiv.innerHTML = `
    
            <img id="imgId" src="${chosenCity.imageUrl}" alt="${chosenCity.cityName}">
    
    `;
        handleButtonSelection(chosenCity);
    }
    else {
        hideButtons();
    }
    const filteredWords = cities_and_cordinates_js_1.citiesCordinates
        .filter((city) => city.city_name_ascii.toLowerCase().includes(userInput))
        .sort()
        .splice(0, 5);
    dropEl.innerHTML = "";
    filteredWords.forEach((item) => {
        const listEl = document.createElement("li");
        listEl.textContent = item.city_name_ascii;
        if (item.city_name_ascii === userInput) {
            listEl.classList.add("match");
        }
        dropEl.appendChild(listEl);
    });
    if (dropEl.children[0] === undefined) {
        return (dropEl.style.height = "0");
    }
    let totalChildrenHeight = dropEl.children[0].offsetHeight * filteredWords.length;
    dropEl.style.height = totalChildrenHeight + "px";
};
if (formEl) {
    formEl.addEventListener("input", formHandler);
}
const addCityEventListener = (addCityButton, chosenCity) => {
    console.log("got to event listener!");
    addCityButton.addEventListener("click", (chosenCity) => {
        console.log("cityArray2 before addition", cityArray2);
        cityArray2 = [...cityArray2, chosenCity];
        console.log("cityArray2 after addition", cityArray2);
        localStorage.setItem("cityArray", JSON.stringify(cityArray2) + JSON.stringify());
    });
    /*to be continued*/
};
const changeCityImageButtonEventListener = (changeCityImageButton) => {
    /*to be continued*/
};
const removeCityButtonEventListener = (removeCityButton) => {
    /*to be continued*/
};
