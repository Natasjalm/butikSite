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
                <p class="hide"> ${product.discount}% </p>
                 <p class="hide"> ${product.soldout} </p>
                <a class="cta" href="product.html?id=${product.id}">See details</a>
            </article>
    `;
  });
}

getProducts();
