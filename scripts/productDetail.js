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
// comments
let commentBox = document.querySelector(".comment-box");
if (data.comments) {
  data.comments.forEach((comment) => {
    commentBox.innerHTML += `
      <div class="d-flex flex-start mb-4">
      <img
        class="rounded-circle shadow-1-strong me-3"
        src="https://picsum.photos/id/${comment.time}/65"
        alt="avatar"
        width="65"
        height="65"
      />
      <div class="card w-100">
        <div class="card-body p-4">
          <div class="">
            <h5>${comment.username}</h5>
            <div class="star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
            <p class="small">${comment.time} hours ago</p>
            <p>${comment.content}</p>
            <div
              class="d-flex justify-content-end align-items-center"
            >
              <a href="#!" class="link-muted"
                ><i class="fas fa-reply me-1"></i> Reply</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
  });
}

// size buttons
const sizeBtn = document.querySelectorAll(".size-btn");
sizeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sizeBtn.forEach((btn2) => {
      btn2.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});
//color buttons
const colorBtn = document.querySelectorAll(".color-btn");
colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    colorBtn.forEach((btn2) => {
      btn2.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});
// related products
const productContainer = document.querySelector(".product-container");
fetch("../data/product.json")
  .then((response) => response.json())
  .then((data) => {
    const usedNumbers = [];
    for (let i = 0; i < 4; ++i) {
      do {
        randomNumber = Math.floor(Math.random() * 12);
        console.log(
          data.products[randomNumber].name != productName.textContent
        );
      } while (
        usedNumbers.includes(randomNumber) ||
        data.products[randomNumber].name == productName.textContent
      );
      usedNumbers.push(randomNumber);
      let item = data.products[randomNumber];
      productContainer.innerHTML += `
      <div class="product-card">
      <div class="img-container">
        <img src="../images/${item.details[0]}" alt="" class="hover-img" />
      </div>
      <div class="des">
        <h5
          class="truncate"
          title="${item.name}"
        >
          ${item.name}
        </h5>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h4>${item.price}đ</h4>
        <a href="./Cart.html"
          ><i class="fa-solid fa-shopping-cart cart"></i
        ></a>
      </div>
    </div>
      `;
    }
    return data;
  })
  .then((data) => {
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((item) => {
      item.addEventListener("click", (e) => {
        const productName =
          e.currentTarget.querySelector(".truncate").textContent;
        data.products.forEach((item) => {
          if (item.name == productName.trim()) {
            localStorage.setItem("productDetail", JSON.stringify(item));
            window.location.href = "ProductDetail.html";
            return;
          }
        });
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
