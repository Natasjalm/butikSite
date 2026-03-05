const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listURL = myCategory ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}&limit=28` : "https://kea-alt-del.dk/t7/api/products?limit=100";
const listContainer = document.querySelector(".page");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}
function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
       <article class="card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="img">
                <h3> ${product.productdisplayname} </h3>
                <p>Price: ${product.price} DKK</p>
                <p> Brand:  ${product.brandname}</p>
                 <h3 class="discount-card ${product.discount > 0 ? "onSale" : ""}" >
               ${product.discount > 0 ? `<p class="badge" > Tilbud ${product.discount}% </p>` : ""} </h3>
                <h3> ${product.soldout === 1 ? `<p class="bagde2">Udsolgt</p>` : `<p class="bagde3">På lager</p>`} </h3>
                 <a class="cta" href="product.html?id=${product.id}">See details</a>
            </article>
    `;
  });
}
// prissortering
const sortByPrice = document.querySelector("#sortByPrice");

let allProducts = [];

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((products) => {
      allProducts = products; // gem originaldata
      showProducts(allProducts);
    });
}
function sortPrice() {
  console.log("sortPrice");
  const sorted = [...allProducts].sort((a, b) => a.price - b.price); // sortere efter pris
  showProducts(sorted); //viser den sorteret liste
}

sortByPrice.addEventListener("click", sortPrice);

// filtrering
const VisWomen = document.querySelector("#VisWomen");
const VisAlle = document.querySelector("#VisAlle");

function filterByGender(targetGender) {
  const filtered = allProducts.filter((product) => (product.gender || "").toLowerCase() === targetGender.toLowerCase());

  showProducts(filtered);
}
VisWomen.addEventListener("click", () => filterByGender("Women"));
VisAlle.addEventListener("click", () => showProducts(allProducts));

getProducts();
