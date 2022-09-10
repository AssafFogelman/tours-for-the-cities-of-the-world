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
exports.showItems = exports.ESort = void 0;
const array_initialization_js_1 = require("./array-initialization.js");
const createGallery_js_1 = require("./components/createGallery.js");
const createCarousel_js_1 = require("./components/createCarousel.js");
const createList_js_1 = require("./components/createList.js");
var ESort;
(function (ESort) {
    ESort[ESort["ASCENDING"] = 0] = "ASCENDING";
    ESort[ESort["DESCENDING"] = 1] = "DESCENDING";
})(ESort || (ESort = {}));
exports.ESort = ESort;
const showItems = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, array_initialization_js_1.changeCityArrayValue)(yield (0, array_initialization_js_1.arrayInitialization)()); //changeCityArrayValue = the variable cityArray is changed to the updated cityArray
    //arrayInitialization = a function that creates the initial array according to the local storage , updateds it (fun 2) and creates an untouched copy of the array+local storage (func 4).
    console.log("cityArray", array_initialization_js_1.cityArray);
    (0, createGallery_js_1.createGallery)(array_initialization_js_1.cityArray);
    (0, createCarousel_js_1.createCarousel)(array_initialization_js_1.cityArray);
    (0, createList_js_1.createList)(array_initialization_js_1.cityArray);
});
exports.showItems = showItems;
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
    let filterElement = document.getElementById("filterId");
    galleryButton === null || galleryButton === void 0 ? void 0 : galleryButton.addEventListener("click", () => {
        galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.classList.remove("is-hidden");
        carouselDiv === null || carouselDiv === void 0 ? void 0 : carouselDiv.classList.add("is-hidden");
        listDiv === null || listDiv === void 0 ? void 0 : listDiv.classList.add("is-hidden");
    });
    carouselButton === null || carouselButton === void 0 ? void 0 : carouselButton.addEventListener("click", () => {
        galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.classList.add("is-hidden");
        carouselDiv === null || carouselDiv === void 0 ? void 0 : carouselDiv.classList.remove("is-hidden");
        listDiv === null || listDiv === void 0 ? void 0 : listDiv.classList.add("is-hidden");
    });
    listButton === null || listButton === void 0 ? void 0 : listButton.addEventListener("click", () => {
        galleryDiv === null || galleryDiv === void 0 ? void 0 : galleryDiv.classList.add("is-hidden");
        carouselDiv === null || carouselDiv === void 0 ? void 0 : carouselDiv.classList.add("is-hidden");
        listDiv === null || listDiv === void 0 ? void 0 : listDiv.classList.remove("is-hidden");
    });
    ascendingSortButton === null || ascendingSortButton === void 0 ? void 0 : ascendingSortButton.addEventListener("click", () => {
        (0, array_initialization_js_1.cityArraySort)(ESort.ASCENDING);
    });
    descendingSortButton === null || descendingSortButton === void 0 ? void 0 : descendingSortButton.addEventListener("click", () => {
        (0, array_initialization_js_1.cityArraySort)(ESort.DESCENDING);
    });
    filterElement === null || filterElement === void 0 ? void 0 : filterElement.addEventListener("input", () => {
        (0, array_initialization_js_1.cityArrayFilter)(filterElement);
    });
});
