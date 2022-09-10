import { City } from "./models/cityClass.model.js";
import { citiesCordinates } from "./models/JSON/cities and cordinates.js";
import { initialCityArray } from "./models/initialCityArray.js";
const containerEl = document.querySelector(".input-container");
const formEl = document.querySelector("#search");
const dropEl = document.querySelector(".drop");
let chosenCity;
let cityIsInCityArray;
const fromCityLsToCityArray = (rawLsCityArrayString) => {
    if (!rawLsCityArrayString) {
        rawLsCityArrayString = JSON.stringify(initialCityArray);
    }
    let tempCityArray = JSON.parse(rawLsCityArrayString);
    let newCityArray = [];
    for (let i = 0; i < tempCityArray.length; i++) {
        newCityArray[i] = new City(tempCityArray[i].cityName, tempCityArray[i].imageUrl);
    }
    return newCityArray;
};
let dataFromLS = localStorage.getItem("cityArray");
let cityArray2 = fromCityLsToCityArray(dataFromLS);
const handleButtonSelection = (chosenCity) => {
    const addCityButton = document.getElementById("add-city-button");
    const changeCityImageButton = document.getElementById("change-image-button");
    const removeCityButton = document.getElementById("remove-city-button");
    console.log("1");
    if (cityArray2.find((city) => {
        if (!city)
            return;
        if (!city.cityName)
            return;
        if (!chosenCity)
            return;
        if (!chosenCity.cityName)
            return;
        return city.cityName.toLowerCase() === chosenCity.cityName.toLowerCase();
    })) {
        console.log("the city already exists in the array");
        cityIsInCityArray = true;
        if (!changeCityImageButton)
            return;
        changeCityImageButton.classList.remove("d-none");
        changeCityImageEventListener(cityIsInCityArray);
        if (!removeCityButton)
            return;
        removeCityButton.classList.remove("d-none");
        removeCityButtonEventListener(removeCityButton);
    }
    else {
        console.log("the city does not exist in the array");
        cityIsInCityArray = false;
        if (!addCityButton)
            return;
        addCityButton.classList.remove("d-none");
        addCityEventListener(addCityButton, chosenCity);
        if (!changeCityImageButton)
            return;
        changeCityImageButton.classList.remove("d-none");
        changeCityImageEventListener(cityIsInCityArray);
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
    let aCityWasChosen = citiesCordinates.find((city) => city.city_name_ascii.toLowerCase() === userInput.toLowerCase());
    console.log("aCityWasChosen = ", aCityWasChosen);
    if (aCityWasChosen) {
        chosenCity = new City(aCityWasChosen.city_name_ascii);
        console.log("aCityWasChosen is true!");
        showCityDiv.innerHTML = `
    
            <img id="imgId" src="${chosenCity.imageUrl}" alt="${chosenCity.cityName}">
    
    `;
        console.log("aCityWasChosen is true!");
        handleButtonSelection(chosenCity);
    }
    else {
        console.log("aCityWasChosen is false!");
        hideButtons();
    }
    const filteredWords = citiesCordinates
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
    addCityButton.addEventListener("click", () => {
        console.log("cityArray2 before addition", cityArray2);
        cityArray2 = [...cityArray2, chosenCity];
        console.log("cityArray2 after addition", cityArray2);
        localStorage.setItem("cityArray", JSON.stringify(cityArray2));
    });
    console.log("city was added!");
};
const changeCityImageEventListener = (cityIsInCityArray) => {
    let saveChangesButton = document.getElementById("save-changes");
    if (!saveChangesButton)
        return;
    let imageUrlInput = document.getElementById("image-url-input");
    saveChangesButton.addEventListener("click", () => {
        if (!imageUrlInput)
            return;
        if (!imageUrlInput.value)
            return;
        chosenCity.imageUrl = imageUrlInput.value;
        const showCityDiv = document.querySelector("#show-city");
        if (!showCityDiv)
            return;
        showCityDiv.innerHTML = `
    
            <img id="imgId" src="${chosenCity.imageUrl}" alt="${chosenCity.cityName}">
    
    `;
        if (cityIsInCityArray) {
            console.log("cityIsInCityArray!");
            console.log("cityArray2 before url change", cityArray2);
            console.log("chosenCity.imageUrl", chosenCity.imageUrl);
            cityArray2[cityArray2.findIndex((city) => {
                var _a, _b;
                return (((_a = city.cityName) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) ===
                    ((_b = chosenCity.cityName) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase()));
            })].imageUrl = chosenCity.imageUrl;
            console.log("cityArray2 after url change", cityArray2);
            localStorage.setItem("cityArray", JSON.stringify(cityArray2));
        }
    });
};
const removeCityButtonEventListener = (removeCityButton) => {
    removeCityButton.addEventListener("click", () => {
        console.log("cityArray2 before removal", cityArray2);
        cityArray2 = cityArray2.filter((city) => {
            return city.cityName != chosenCity.cityName;
        });
        console.log("cityArray2 after removal", cityArray2);
        localStorage.setItem("cityArray", JSON.stringify(cityArray2));
        console.log("city was removed!");
    });
};
