const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector(".product_info_card");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
    <div class="info-img"><img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="img"></div>
            <div class="info">
                <h1 class="lille-h1">Product Information</h1>
                <h3>Model name</h3>
                <p>${data.productdisplayname}</p>
                <h3>Gender</h3>
                <p>${data.gender}</p>
                <h3>Usage type</h3>
                <p>${data.usagetype}</p>
                <h3>Price</h3>
                <p>${data.price}</p>
                <button>Add to basket</button>

            </div>
    
  `;
}

getData();
