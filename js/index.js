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
    let newDescript =
      item.shortDescription.length > 50
        ? `${item.shortDescription.substring(0, 50)}…`
        : item.shortDescription;
    html += `<div class="col item">
    <div class="card mx-auto mt-lg-5 mt-md-4 mt-sm-2" style="background-color:#F8F8F8; border:none; border-radius:0">
      <img src=${item.image} alt="..." class="m-auto" width="220px"/>
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${newDescript}</p>
      </div>
      <div class="p-0" style="height:64px">
        <div
          class="d-flex justify-content-center align-items-center text-center h-100"
        >
          <div class="d-flex justify-content-center align-items-center col h-100" style="background-color:#E1B067">
            <a href="register.html" class="m-0 text-black" style="font-weight:200; font-size:24px;line-height:29px;text-decoration:none;cursor:pointer">Buy now</a>
          </div>
          <div class="d-flex justify-content-center align-items-center col h-100" style="background-color:#DEDDDC">
            <p class="m-0" style="font-weight:600; font-size:24px;line-height:29px">${item.price}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("product-row").innerHTML = html;
};

export { getAllProduct, renderItems };
