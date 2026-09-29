const btn = document.querySelector(".btn");
const boxCards = document.querySelector(".row");
const message = document.querySelector(".message");
btn.addEventListener("click", () => {
  message.classList.remove("d-none");
  fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    products = data.products;
    message.classList.add("d-none");

      products.forEach((index) => {
        let content = `<div class="col-12 col-sm-6  col-md-4 col-lg-3 mb-3">
        <div class="card product-card">
          <img src="${index.images[0]}" class="card-img-top w-100 product-image" alt="${index.tags[1]}" />
          <div class="card-body">
            <h5 class="card-title">${index.title}</h5>
            <p class="card-text text-muted">${index.tags[0]}</p>
            <p class="card-text product-description">${index.description}</p>
            <p class="text-success">$${index.price}</p>
            <a href="#" class="btn btn-primary w-100 mt-2">View Product</a>
          </div>
        </div>
      </div>`;

        boxCards.innerHTML += content;
      });
    });
});
