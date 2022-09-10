"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGallery = void 0;
const createGallery = (citiesArray) => {
    let GalleryDiv = document.getElementById("GalleryId");
    let innerHTMLBuffer = "";
    for (let city of citiesArray) {
        innerHTMLBuffer += `

    <!-- ${citiesArray.indexOf(city) + 1} item -->
        <div class="col-4">
          <div class="card" style="width: 18rem; margin-top: 3rem">
            <img src="${city.imageUrl}" class="card-img-top" alt="${city.cityName}" />
            <div class="card-body">
              
              <div class="name-icon-and-temperature">
                <div><h5 class="card-title">${city.cityName}</h5></div>
                <div class="icon-and-temperature">
                <img src="${city.weatherIcon}" alt="${city.weatherDescription}" />
                <div>${city.currentTemperature}°C</div>
                </div>
                </div>
              <p class="card-text">
                it's a beautiful ${city.dayStatus /*0=night, 1=day*/ ? "day" : "evening"} in the fabulous ${city.cityName}! you'll experience ${city.weatherDescription} which is perfect for our cutomized tours!
              </p>
              <a href="https://meshulam.co.il/quick_payment?b=870a274b957d21562dfefa9416c4b5bc" target=”_blank” class="btn btn-primary">vist now for only ${city.price}$!</a>
            </div>
          </div>
        </div>
        <!-- end of  item -->
        `;
    }
    if (GalleryDiv) {
        GalleryDiv.innerHTML = innerHTMLBuffer;
    }
};
exports.createGallery = createGallery;
