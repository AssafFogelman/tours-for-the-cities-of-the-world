import {
  arrayInitialization,
  cityArray,
  changeCityArrayValue,
  cityArraySort,
  cityArrayFilter,
} from "./array-initialization.js";
import { City } from "./models/cityClass.model.js";
import { createGallery } from "./components/createGallery.js";
import { createCarousel } from "./components/createCarousel.js";
import { createList } from "./components/createList.js";

enum ESort {
  ASCENDING,
  DESCENDING,
}

const showItems = async () => {
  changeCityArrayValue(await arrayInitialization()); //changeCityArrayValue = the variable cityArray is changed to the updated cityArray
  //arrayInitialization = a function that creates the initial array according to the local storage , updateds it (fun 2) and creates an untouched copy of the array+local storage (func 4).
  console.log("cityArray", cityArray);
  createGallery(cityArray);
  createCarousel(cityArray);
  createList(cityArray);
};

showItems();

window.addEventListener("load", () => {
  let galleryButton = document.getElementById("gallery-button");
  let carouselButton = document.getElementById("carousel-button");
  let listButton = document.getElementById("list-button");
  let ascendingSortButton = document.getElementById("ascending-sort-button");
  let descendingSortButton = document.getElementById("descending-sort-button");
  let galleryDiv = document.getElementById("GalleryId");
  let carouselDiv = document.getElementById("carouselID");
  let listDiv = document.getElementById("listId");
  let filterElement = document.getElementById(
    "filterId"
  ) as HTMLInputElement | null;

  galleryButton?.addEventListener("click", () => {
    galleryDiv?.classList.remove("is-hidden");
    carouselDiv?.classList.add("is-hidden");
    listDiv?.classList.add("is-hidden");
  });
  carouselButton?.addEventListener("click", () => {
    galleryDiv?.classList.add("is-hidden");
    carouselDiv?.classList.remove("is-hidden");
    listDiv?.classList.add("is-hidden");
  });
  listButton?.addEventListener("click", () => {
    galleryDiv?.classList.add("is-hidden");
    carouselDiv?.classList.add("is-hidden");
    listDiv?.classList.remove("is-hidden");
  });

  ascendingSortButton?.addEventListener("click", () => {
    cityArraySort(ESort.ASCENDING);
  });

  descendingSortButton?.addEventListener("click", () => {
    cityArraySort(ESort.DESCENDING);
  });

  filterElement?.addEventListener("input", () => {
    cityArrayFilter(filterElement);
  });
});

/*
  
  ***initializing the array
  1. a function that creates the initial array according to the local storage , updateds it (fun 2) and creates an untouched copy of the array+local storage (func 4). 
  
  2. a function that recieves an array of cities and returns an updated array of cities.
  
  3. refresh page - 
   a function that recieves an array (it might be a filtered array), refreshes the page and calls the 3 components (gallery, carousel, and list) 
  
  4. a function to save the array into the local storage.
  
  5. sort function - sorts and changes the array (with direction), updates it (function 2), saves it to the local storage (function 4), and refreshes the page (function 3)
  6. filter function - changes the main array according to a filtered untouched array. updates it (function 2), and refreshes the page (function 3). if the inpu is empty, the filtered array will be the same as the original gam kacha.

  */

// export interface ApiData {
//   latitude: number;
//   longitude: number;
// }

// arrayInitialization()
//   .then((response) => {
//     console.log(response);
//     if (response[0].apiData as ApiData) {
//       let apiData = response[0].apiData as ApiData;
//       apiData;
//     }
//     // build the website
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export { ESort, showItems };
