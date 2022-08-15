import { getAllProduct, renderItems } from "./index.js";

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParams = urlParams.get("productid");
  getParamsProduct(myParams);
};

let getParamsProduct = (myParams) => {
  let promise = axios({
    url: " https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParams,
    method: "GET",
  });

  promise.then((result) => {
    let relativeProducts = renderDetails(result.data.content);
    renderRelateProducts(relativeProducts);
  });

  promise.catch((err) => {
    console.log(err);
  });
};

let renderDetails = (objItem) => {
  let { relatedProducts, size } = objItem;
  let html = "";
  html += `
    <div class="col-left">
        <div class="detail-left">
            <img src=${objItem.image} alt="..." width="220px" />
        </div>
    </div>
    <div class="col-right">
        <div class="detail-right">
            <h3>${objItem.name}</h3>
            <p>${objItem.description}</p>
            <span>Avaiable size</span>
            <div class="size" id="size-list">
                ${renderSizeList(size)}
            </div>
            <h1>${objItem.price}$</h1>
            <div class="changeSize">
                <div class="enhance"><p>+</p></div>
                <p>1</p>
                <div class="enhance"><p>-</p></div>
            </div>
            <div class="addBTN">Add to cart</div>
        </div>
    </div>`;
  document.getElementById("item-detail").innerHTML = html;
  return relatedProducts;
};

let renderSizeList = (listSize) => {
  let html = "";
  listSize.forEach((size, index) => {
    html += `<div class="size-num"><p>${size}</p></div>`;
  });
  return html;
};

let renderRelateProducts = (listProducts) => {
  console.log("relate:", listProducts.length);
  let html = "";
  listProducts.forEach((item, index) => {
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
            <a href="./detail.html?productid=${item.id}" class="m-0 text-black" style="font-weight:200; font-size:24px;line-height:29px;text-decoration:none;cursor:pointer">Buy now</a>
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
