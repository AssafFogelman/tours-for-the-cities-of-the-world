import { City } from "./models/cityClass.model.js"; //importing the class
import { initialCityArray } from "./models/initialCityArray.js";
import { ESort, showItems } from "./ts-cities-index.js";
import { createGallery } from "./components/createGallery.js";
import { createCarousel } from "./components/createCarousel.js";
import { createList } from "./components/createList.js";
/*
this file creates the array of cities variable.
If there is a valid array in the local storage it puts the value in the variable.
If not, it gives the variable a pre-existing value.
*/

let cityArray: City[];
let cityArrayUntouched: City[];

enum EResetOptions {
  YES,
  NO,
}

const changeCityArrayValue = (array: City[]) => {
  /* changes cityArray variable */
  cityArray = array;
  return cityArray;
};

const cityArraySort = (sortDirection: ESort) => {
  /* sorts cityArray by price. Then updates the localstorage. then refreshes the page*/
  cityArray.sort((a, b): number => {
    if (!a.price || !b.price) return 0;

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

const cityArrayFilter = (filterElement: HTMLInputElement | null) => {
  if (!filterElement) return;

  let filteredCityArray: City[] = [
    ...cityArray.filter((city) =>
      city.cityName?.toLowerCase().includes(filterElement.value.toLowerCase())
    ),
  ];
  createGallery(filteredCityArray);
  createCarousel(filteredCityArray);
  createList(filteredCityArray);
};

const fromCityLsToCityArray = (rawLsCityArrayString: string) => {
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

const getJsonData = async (apiUrl: string | undefined) => {
  //the function recieves an Api address and returns an object with the information
  return await fetch(apiUrl as RequestInfo | URL)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((errorMessege) => {
      console.error(errorMessege);
      return { errorMessege }; // {errorMessage: ...}
    });
};

const arrayInitialization = async (
  reset = EResetOptions.NO /*its not reseting by default but may change*/
) => {
  let lsData = localStorage.getItem("cityArray");
  if (lsData && reset === EResetOptions.NO) {
    //if we don't want to reset and there already is something in the local storage
    cityArray = fromCityLsToCityArray(lsData);

    for (let index = 0; index < cityArray.length; index++) {
      let res = await getJsonData(cityArray[index].apiUrl);
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
  } else {
    localStorage.setItem("cityArray", JSON.stringify(initialCityArray));
    return initialCityArray;
  }
  // let lsCityArray: City[] = JSON.parse(
  //   localStorage.getItem("cityArray") as string
  // );
  // if (!lsCityArray) {
  //   console.log("there is no key named cityArray!");
  // }
};

export {
  arrayInitialization,
  cityArray,
  changeCityArrayValue,
  cityArraySort,
  cityArrayFilter,
  fromCityLsToCityArray,
};
