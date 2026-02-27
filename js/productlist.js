const listURL = "https://kea-alt-del.dk/t7/api/products?limit=50";
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
                <a class="cta" href="product.html">See details</a>
            </article>
    `;
  });
}

getProducts();
