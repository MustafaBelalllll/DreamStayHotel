// const proxy = "https://localhost:7197"

function createRoom(roomData) {
    // Create the card container
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('col-lg-4', 'col-md-6', 'my-3');

  console.log(roomData.extras);


  // Set the inner HTML of the card
  cardContainer.innerHTML = `
    <div class="card border-0 shadow" style="max-width: 350px; margin: auto">
      <img src="${roomData.img_Src}" class="card-img-top" />
      <div class="card-body">
        <h5>${roomData.name}</h5>
        <h6 class="mb-4">${roomData.pricePerNight} Ft/éjszaka</h6>
        <div class="features mb-4">
          <h6 class="mb-1">Jellemzők:</h6>
          <span class="badge rounded-pill bg-light text-dark text-wrap">
            ${roomData.description}
          </span>
        </div>
        <div class="rating mb-4">
          <h6 class="mb-1">Értékelés:</h6>
          <span class="badge rounded-pill bg-light">
            ${convertRating(roomData.rating).innerHTML}
          </span>
        </div>
        <div class="d-flex justify-content-evenly mb-2">
          <button id="availabilityBtn" class="btn btn-sm text-white custom-bg shadow-none">
            Foglalás
          </button>
          <button type="button" class="btn btn-sm btn-outline-dark shadow-none" data-bs-toggle="modal" data-bs-target="#modalSuperior">
            További részletek
          </button>
        </div>
      </div>
    </div>
  `;

  return cardContainer;
}

async function loadRooms(){
    const row = getElement("#row")
    await fetch(`${proxy}/api/Room/rooms`).then(async(response) => await response.json()).then((data) => {
        data.map((element) => {
            row.appendChild(createRoom(element))
        })
    })
}

function convertRating(number) {
    const span = document.createElement("span")
    span.classList.add("badge", "rounded-pill", "bg-light")
    for(let i = 0; i < number; i++) {
        const star = document.createElement('i')
        star.classList.add('bi', 'bi-star-fill', 'text-warning')
        span.appendChild(star)
    }
    return span
}


window.onload = () => {
    loadRooms()
}