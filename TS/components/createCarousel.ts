import { cityArray } from "../array-initialization.js";
import { City } from "../models/cityClass.model.js";

const createCarousel = (cityArray: City[]) => {
  console.log("createCarousel was run!");
  let carouselDiv = document.querySelector(".carousel");
  if (!carouselDiv) {
    console.log("problem!");
    return;
  } //mostly for TS's sake
  let carouselInnerHtmlBuffer = `
  <button class="carousel__button carousel__button--left is-hidden">
          <img
            src="./assets/imgs/carousel-buttons/Ic_keyboard_arrow_left_48px.svg"
            alt="left button"
          />
        </button>
        <div class="carousel__track-container">
          <ul class="carousel__track">
          `; /* beginning of carousel HTML */
  for (let index = 0; index < cityArray.length; index++) {
    if (index === 0) {
      carouselInnerHtmlBuffer += `<li class="carousel__slide current-slide">`;
    } else {
      carouselInnerHtmlBuffer += `<li class="carousel__slide">`;
    } /* if this is the first slide, it will recieve a "current-slide" class */

    carouselInnerHtmlBuffer += ` 
      <img class="carousel__image" src="${cityArray[index].imageUrl}" alt="${cityArray[index].cityName}" />
    </li>
            `;
  }
  carouselInnerHtmlBuffer += `
  </ul>
  </div>
  <button class="carousel__button carousel__button--right">
    <img
      src="./assets/imgs/carousel-buttons/Ic_keyboard_arrow_right_48px.svg"
      alt="right button"
    />
  </button>
  <div class="carousel__nav">`;
  /* middle of carousel HTML */
  for (let index = 0; index < cityArray.length; index++) {
    if (index === 0) {
      carouselInnerHtmlBuffer += `
      <button class="carousel__indicator current-slide"></button>`;
    } else {
      carouselInnerHtmlBuffer += `
    <button class="carousel__indicator"></button>`;
      /* first nav button has the class "current-slide" */
    }
  }
  carouselInnerHtmlBuffer += `
  </div>
  `;
  /*now the city title HTML*/

  carouselInnerHtmlBuffer += `
  <div class="carousel__city-information">
        <h3 class="carousel__city-name">${cityArray[0].cityName}</h3>
        <div class="carousel__icon-and-temperature">
          <img
            src="${cityArray[0].weatherIcon}"
            alt="${cityArray[0].weatherDescription}"
          />
          <p>${cityArray[0].currentTemperature}°C</p>
        </div>
      </div>
  `;
  /* end of carousel HTML*/
  carouselDiv.innerHTML = carouselInnerHtmlBuffer;
  /* appending the carousel HTML */

  operateCarousel();
};

const operateCarousel = () => {
  const carousel: HTMLElement | null = document.querySelector(".carousel");
  if (!carousel) {
    console.error("there is no carousel element");
    return;
  }
  console.log("carousel", carousel.getBoundingClientRect());
  const track: HTMLElement | null = document.querySelector(".carousel__track");
  if (!track) {
    console.log("there is no track element");
    return;
  }
  let slides: Element[] | null = Array.from(track.children);
  if (!slides) {
    console.log("there is no slides element");
    return;
  }

  const nextButton: HTMLElement | null = document.querySelector(
    ".carousel__button--right"
  );
  if (!nextButton) {
    console.error("there is no next button!");
    return;
  }
  const prevButton: HTMLElement | null = document.querySelector(
    ".carousel__button--left"
  );
  if (!prevButton) {
    console.error("there is no previous button!");
    return;
  }

  const dotsNav: Element | null = document.querySelector(".carousel__nav");
  if (!dotsNav) {
    console.error("there is no dotsNav element!");
    return;
  }
  let dots: Element[] | null = Array.from(dotsNav.children);

  if (!carousel.parentElement) {
    console.error("there is no parent element to the carousel element!");
    return;
  }
  const slideWidth = (carousel.parentElement.getBoundingClientRect().width *
    0.8) as number;

  //the original code was the one below. it takes the width of the first slide.
  //however, if the carousel is in "display: none" when this code is executed,
  //then the width is 0.
  //to overcome this, I checked what is the width of the slide. it is, 100% of the ".carousel" element.
  //And the ".carousel" element takes 80% width from it's parent.
  //so i changed the width to that - 80% of the parent of element ".carousel".
  //here is the previous code:

  // const slideWidth = slides[0].getBoundingClientRect().width as number;
  // if (!slideWidth) {
  //   console.error("there is no width to the first slide!");
  //   return;
  // }

  slides.forEach((slide, index) => setSlidePosition(slideWidth, slide, index));

  //window.addEventListener("load", () => {

  console.log("we have reached the carousel's event listeners!");

  nextButton.addEventListener("click", (e) => {
    console.log("next button was clicked!");
    const currentSlide: HTMLElement | null =
      track.querySelector(".current-slide");
    if (!currentSlide) return;
    const targetSlide = currentSlide.nextElementSibling as HTMLElement | null;
    if (!targetSlide) return;
    const currentDot: HTMLElement | null =
      dotsNav.querySelector(".current-slide");
    if (!currentDot) return;
    const targetDot = currentDot.nextElementSibling as HTMLElement | null;
    if (!targetDot) return;
    if (!slides) return;
    const targetIndex = slides.findIndex((slide) => slide === targetSlide);
    moveToSlide(track, currentSlide, targetSlide);
    //move to the next slide
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    showCurrentCityName(targetIndex);
  });

  prevButton.addEventListener("click", (e) => {
    console.log("previous button was clicked!");
    const currentSlide: HTMLElement | null =
      track.querySelector(".current-slide");
    if (!currentSlide) return;
    const targetSlide =
      currentSlide.previousElementSibling as HTMLElement | null;
    if (!targetSlide) return;
    const currentDot: HTMLElement | null =
      dotsNav.querySelector(".current-slide");
    if (!currentDot) return;
    const targetDot = currentDot.previousElementSibling as HTMLElement | null;
    if (!targetDot) return;
    if (!slides) return;
    const targetIndex = slides.findIndex((slide) => slide === targetSlide);
    moveToSlide(track, currentSlide, targetSlide);
    //move to the previous slide
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    showCurrentCityName(targetIndex);
  });

  dotsNav.addEventListener("click", (e) => {
    console.log("the dots area was clicked!");
    if (!e.target) return;
    const targetDot = (e.target as Element).closest("button");
    //target - the element that was clicked.
    //closest("button") - return the element that is a "button" tag. if you can't find one, return Null
    //this way you get a Null when the user clicks on things that are not the buttons
    if (!targetDot) return;
    const currentSlide: HTMLElement | null =
      track.querySelector(".current-slide");
    if (!currentSlide) return;
    const currentDot: HTMLElement | null =
      dotsNav.querySelector(".current-slide");
    if (!currentDot) return;
    if (!dots) return;
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    if (!slides) return;
    const targetSlide = slides[targetIndex] as HTMLElement;

    moveToSlide(track, currentSlide, targetSlide);
    //findIndex(function that returns a truthy statement in certain circumstances)
    //returns the index of the cell
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    showCurrentCityName(targetIndex);
  });
  //});
};
//arrange the slides next to one another

const setSlidePosition = (
  slideWidth: number,
  slide: Element,
  index: number
) => {
  (slide as HTMLElement).style.left = `${index * slideWidth}px`;
};

const moveToSlide = (
  track: HTMLElement,
  currentSlide: HTMLElement,
  targetSlide: HTMLElement
) => {
  const amountToMove = targetSlide.style.left;
  track.style.transform = `translateX(-${amountToMove})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  //   const targetIndex = slides.findIndex((slide) => slide === currentSlide) + 1;
  //   console.log("targetIndex is:", targetIndex);
  //   if (targetIndex === 0) {
  //     prevButton.classList.add("is-hidden");
  //     nextButton.classList.remove("is-hidden");
  //   } else if (targetIndex === slides.length - 1) {
  //     nextButton.classList.add("is-hidden");
  //     prevButton.classList.remove("is-hidden");
  //   } else {
  //     nextButton.classList.remove("is-hidden");
  //     prevButton.classList.remove("is-hidden");
  //   }
};

const updateDots = (currentDot: HTMLElement, targetDot: HTMLElement) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (
  slides: Element[],
  prevButton: HTMLElement,
  nextButton: HTMLElement,
  targetIndex: number
) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    nextButton.classList.add("is-hidden");
    prevButton.classList.remove("is-hidden");
  } else {
    nextButton.classList.remove("is-hidden");
    prevButton.classList.remove("is-hidden");
  }
};

const showCurrentCityName = (targetIndex: number) => {
  let currentCityName = document.querySelector(".carousel__city-name");
  if (!currentCityName) return;
  currentCityName.innerHTML = cityArray[targetIndex].cityName as string;
  let currentCityIconElement: HTMLImageElement | null = document.querySelector(
    ".carousel__icon-and-temperature img"
  );
  if (!currentCityIconElement) {
    console.log("no icon element found");
    return;
  }
  console.log("currentCityIconElement", currentCityIconElement);
  currentCityIconElement.src = cityArray[targetIndex].weatherIcon as string;
  let currentCityTemperatureElement: HTMLElement | null =
    document.querySelector(".carousel__icon-and-temperature p");
  if (!currentCityTemperatureElement) {
    console.log("temperature element not found!");
    return;
  }
  currentCityTemperatureElement.innerText = `${cityArray[targetIndex].currentTemperature}°C`;
};

export { createCarousel };
