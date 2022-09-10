import { cityArray } from "../array-initialization";
import { City } from "../models/cityClass.model";

const createList = (cityArray: City[]) => {
  let listDiv = document.querySelector(".list");
  if (!listDiv) {
    console.log("the is no list div!");
    return;
  }
  let listHTMLBuffer = "";

  for (let index in cityArray) {
    listHTMLBuffer += `
    <div class="row mt-1 add-border">
        <div class="col-3">
            <img src="${cityArray[index].imageUrl}" alt="${cityArray[index].cityName}" />
        </div>
        <div class="col">
            ${cityArray[index].cityName}
        </div>
        <div class="col">
            ${cityArray[index].currentTemperature}°C 
        </div>
        <div class="col">
        <img src="${cityArray[index].weatherIcon}" alt="${cityArray[index].weatherDescription}" />    
        
        </div>
        <div class="col">
            ${cityArray[index].price}$

            
        </div>
        <div class="col-1">
            <!-- Button trigger modal -->
            <a
            class="btn btn-primary"
            href="https://meshulam.co.il/quick_payment?b=870a274b957d21562dfefa9416c4b5bc"
            target="_blank"
            >
            <i class="bi bi-airplane"></i>
            </a>
        </div>
    </div>
    `;
  }

  listDiv.innerHTML = listHTMLBuffer;

  //handleList();
};

export { createList };
