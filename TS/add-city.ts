import { City } from "./models/cityClass.model.js";
import { citiesCordinates } from "./models/JSON/cities and cordinates.js";
import { initialCityArray } from "./models/initialCityArray.js";

const containerEl = document.querySelector(".input-container");
const formEl: HTMLInputElement | null = document.querySelector("#search");
const dropEl: HTMLElement | null = document.querySelector(".drop");

let chosenCity: City;

let cityIsInCityArray: boolean;

const fromCityLsToCityArray = (rawLsCityArrayString: string | null) => {
  if (!rawLsCityArrayString) {
    rawLsCityArrayString = JSON.stringify(initialCityArray);
  }
  let tempCityArray: City[] = JSON.parse(rawLsCityArrayString);
  let newCityArray: City[] = [];
  for (let i = 0; i < tempCityArray.length; i++) {
    newCityArray[i] = new City(
      tempCityArray[i].cityName,
      tempCityArray[i].imageUrl
    );
  }
  //we need to do this because the local storage does not contain the "City" class functions. this will add the function "appendWeatherData".
  return newCityArray;
};

let dataFromLS = localStorage.getItem("cityArray");
let cityArray2: City[] = fromCityLsToCityArray(dataFromLS) as City[];

const handleButtonSelection = (chosenCity: City) => {
  //if the chosen city already exists, you will not be able to add it.
  //if it doesn't, you will not be able to remove it.
  const addCityButton = document.getElementById("add-city-button");
  const changeCityImageButton = document.getElementById("change-image-button");
  const removeCityButton = document.getElementById("remove-city-button");
  console.log("1");

  if (
    cityArray2.find((city) => {
      if (!city) return;
      if (!city.cityName) return;
      if (!chosenCity) return;
      if (!chosenCity.cityName) return;
      return city.cityName.toLowerCase() === chosenCity.cityName.toLowerCase();
    })
    /*the chosen city already exists in cityArray2*/
  ) {
    console.log("the city already exists in the array");
    cityIsInCityArray = true;
    if (!changeCityImageButton) return;
    changeCityImageButton.classList.remove("d-none");
    changeCityImageEventListener(cityIsInCityArray);
    if (!removeCityButton) return;
    removeCityButton.classList.remove("d-none");
    removeCityButtonEventListener(removeCityButton);
  } else {
    console.log("the city does not exist in the array");
    cityIsInCityArray = false;
    if (!addCityButton) return;
    addCityButton.classList.remove("d-none");
    addCityEventListener(addCityButton, chosenCity);
    if (!changeCityImageButton) return;
    changeCityImageButton.classList.remove("d-none");
    changeCityImageEventListener(cityIsInCityArray);
  }
};

const hideButtons = () => {
  const addCityButton = document.getElementById("add-city-button");
  const changeCityImageButton = document.getElementById("change-image-button");
  const removeCityButton = document.getElementById("remove-city-button");
  const image = document.getElementById("imgId");
  if (!addCityButton) return;
  addCityButton.classList.add("d-none");
  if (!changeCityImageButton) return;
  changeCityImageButton.classList.add("d-none");
  if (!removeCityButton) return;
  removeCityButton.classList.add("d-none");
  image?.remove();
};

const formHandler = (e: Event) => {
  if (!e.target) return;
  const userInput = (e.target as HTMLInputElement).value.toLowerCase();
  const showCityDiv = document.querySelector("#show-city");
  if (!showCityDiv) return;
  if (!dropEl) return;
  if (userInput.length === 0) {
    dropEl.style.height = "0";
    return (dropEl.innerHTML = "");
  }

  let aCityWasChosen = citiesCordinates.find(
    (city) => city.city_name_ascii.toLowerCase() === userInput.toLowerCase()
  );
  //aCityWasChosen receives the attributes of the chosen city from the grand 40,000 cities DB. but not all attributes.
  //so we will create a new city with a "City" class.
  console.log("aCityWasChosen = ", aCityWasChosen);
  if (aCityWasChosen) {
    chosenCity = new City(aCityWasChosen.city_name_ascii);
    console.log("aCityWasChosen is true!");
    showCityDiv.innerHTML = `
    
            <img id="imgId" src="${chosenCity.imageUrl}" alt="${chosenCity.cityName}">
    
    `;
    console.log("aCityWasChosen is true!");
    handleButtonSelection(chosenCity);
  } else {
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

  let totalChildrenHeight =
    (dropEl.children[0] as HTMLElement).offsetHeight * filteredWords.length;
  dropEl.style.height = totalChildrenHeight + "px";
};

if (formEl) {
  formEl.addEventListener("input", formHandler);
}

const addCityEventListener = (addCityButton: HTMLElement, chosenCity: City) => {
  addCityButton.addEventListener("click", () => {
    console.log("cityArray2 before addition", cityArray2);
    cityArray2 = [...cityArray2, chosenCity];
    console.log("cityArray2 after addition", cityArray2);
    localStorage.setItem("cityArray", JSON.stringify(cityArray2));
  });
  console.log("city was added!");
  /*to be continued*/
};

const changeCityImageEventListener = (cityIsInCityArray: boolean) => {
  let saveChangesButton = document.getElementById("save-changes");
  if (!saveChangesButton) return;
  let imageUrlInput: HTMLInputElement | null = document.getElementById(
    "image-url-input"
  ) as HTMLInputElement;

  saveChangesButton.addEventListener("click", () => {
    if (!imageUrlInput) return;
    if (!imageUrlInput.value) return;
    chosenCity.imageUrl = imageUrlInput.value;
    const showCityDiv = document.querySelector("#show-city");
    if (!showCityDiv) return;
    showCityDiv.innerHTML = `
    
            <img id="imgId" src="${chosenCity.imageUrl}" alt="${chosenCity.cityName}">
    
    `;

    if (cityIsInCityArray) {
      console.log("cityIsInCityArray!");
      console.log("cityArray2 before url change", cityArray2);
      console.log("chosenCity.imageUrl", chosenCity.imageUrl);
      cityArray2[
        cityArray2.findIndex((city) => {
          return (
            city.cityName?.toLocaleLowerCase() ===
            chosenCity.cityName?.toLocaleLowerCase()
          );
        })
      ].imageUrl = chosenCity.imageUrl;
      console.log("cityArray2 after url change", cityArray2);
      localStorage.setItem("cityArray", JSON.stringify(cityArray2));
    }
  });
  /*to be continued*/
};

const removeCityButtonEventListener = (removeCityButton: HTMLElement) => {
  removeCityButton.addEventListener("click", () => {
    console.log("cityArray2 before removal", cityArray2);
    cityArray2 = cityArray2.filter((city) => {
      return city.cityName != chosenCity.cityName;
    });
    console.log("cityArray2 after removal", cityArray2);
    localStorage.setItem("cityArray", JSON.stringify(cityArray2));
    console.log("city was removed!");
  });

  /*to be continued*/
};
