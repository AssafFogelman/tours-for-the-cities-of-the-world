"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createList = void 0;
const createList = (cityArray) => {
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

            <a
            class="btn btn-primary"
            href="https://meshulam.co.il/quick_payment?b=870a274b957d21562dfefa9416c4b5bc"
            target="_blank"
            >
            <i class="bi bi-airplane"></i>
            </a>
        </div>
        <div class="col-1">
            <!-- Button trigger modal -->
            <button
            type="button"
            class="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#editRealestateModal"
            <!-- onclick="handleModalPopupClick()" -->
                <i class="bi bi-pencil-square"></i>
            </button>
        </div>
    </div>
    `;
    }
    listDiv.innerHTML = listHTMLBuffer;
    //handleList();
};
exports.createList = createList;
