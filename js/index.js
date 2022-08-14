window.onload = () => {
  getAllProduct();
};

let getAllProduct = () => {
  let promise = axios({
    url: " https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then((result) => {
    console.log(result.data.content);
    renderItems(result.data.content);
  });

  promise.catch((err) => {
    console.log(err);
  });
};

let renderItems = (arrItem) => {
  let html = "";
  arrItem.forEach((item, index) => {
    html += `<div class="col item">
    <div class="card">
      <img src=${item.image} alt="..." class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.shortDescription}</p>
      </div>
      <div class="card-footer p-0">
        <div
          class="d-flex justify-content-center align-items-center text-center"
        >
          <div class="col bg-warning pt-2 ps-3 pb-2">Buy now</div>
          <div class="col pt-2 pe-3 pb-2">${item.price}$</div>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("product-row").innerHTML = html;
};
