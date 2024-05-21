const data = JSON.parse(localStorage.getItem("productDetail"));
const productName = document.querySelector(".name-detail");
const price = document.querySelector(".price-detail");
const des = document.querySelector(".des-detail");
const fabrication = document.querySelector(".fabrication");
const c1 = document.querySelector(".img-1-carousel");
const c2 = document.querySelector(".img-2-carousel");
const videoc = document.querySelector(".video-product-carousel");
const b1 = document.querySelector(".img-1-bottom");
const b2 = document.querySelector(".img-2-bottom");
productName.textContent = data.name;
price.textContent = data.price + "₫";
des.textContent = data.description;
fabrication.textContent = data.fabrication;
c1.src = `../images/${data.details[0]}`;
c2.src = `../images/${data.details[1]}`;
b1.src = `../images/${data.details[0]}`;
b2.src = `../images/${data.details[1]}`;
videoc.src = `../videos/${data.details[2]}`;

//in, dec quantity
let quantity = document
  .querySelector(".quantity")
  .getElementsByTagName("input")[0];
const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");
const changeQuantity = (number) => {
  if (Number(quantity.value) == 1 && number == -1) return;
  quantity.value = Number(quantity.value) + number;
};
incBtn.onclick = () => {
  changeQuantity(1);
};
decBtn.onclick = () => {
  changeQuantity(-1);
};
// decBtn.addEventListener("click", changeQuantity(-1));
