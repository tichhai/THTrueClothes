fetch("../data/product.json")
  .then((response) => response.json())
  .then((data) => {
    const dataProducts = data.products;
    dataProducts.forEach((item, index) => {
      if (index < 8) {
        const productContainer = document.querySelector(".product-container");
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        const img = document.createElement("img");
        img.src = `../images/${item.details[0]}`;
        img.alt = "";
        img.classList.add("hover-img");
        //change image when hover
        img.addEventListener("mouseenter", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = `../images/${item.details[1]}`;
            img.style.opacity = 1;
          }, 200);
        });
        img.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = `../images/${item.details[0]}`;
            img.style.opacity = 1;
          }, 200);
        });
        imgContainer.appendChild(img);
        const des = document.createElement("div");
        des.classList.add("des");
        const h5 = document.createElement("h5");
        h5.classList.add("truncate");
        h5.title = item.name;
        h5.textContent = item.name;
        const starDiv = document.createElement("div");
        starDiv.classList.add("star");
        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-solid", "fa-star");
          starDiv.appendChild(star);
        }
        const price = document.createElement("h4");
        price.textContent = item.price + "đ";
        const cartLink = document.createElement("a");
        cartLink.href = "./Cart.html";

        const cartIcon = document.createElement("i");
        cartIcon.classList.add("fa-solid", "fa-shopping-cart", "cart");

        cartLink.appendChild(cartIcon);

        des.appendChild(h5);
        des.appendChild(starDiv);
        des.appendChild(price);
        des.appendChild(cartLink);

        productCard.appendChild(imgContainer);
        productCard.appendChild(des);

        productContainer.appendChild(productCard);
      } else {
        const newsArrival = document.querySelector(".newsarrival");
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        const img = document.createElement("img");
        img.src = `../images/${item.details[0]}`;
        img.alt = "";
        img.classList.add("hover-img");
        //change image when hover
        img.addEventListener("mouseenter", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = `../images/${item.details[1]}`;
            img.style.opacity = 1;
          }, 200);
        });
        img.addEventListener("mouseleave", () => {
          img.style.opacity = 0;
          setTimeout(() => {
            img.src = `../images/${item.details[0]}`;
            img.style.opacity = 1;
          }, 200);
        });
        imgContainer.appendChild(img);
        const des = document.createElement("div");
        des.classList.add("des");
        const h5 = document.createElement("h5");
        h5.classList.add("truncate");
        h5.title = item.name;
        h5.textContent = item.name;
        const starDiv = document.createElement("div");
        starDiv.classList.add("star");
        for (let i = 0; i < 5; i++) {
          const star = document.createElement("i");
          star.classList.add("fa-solid", "fa-star");
          starDiv.appendChild(star);
        }
        const price = document.createElement("h4");
        price.textContent = item.price + "đ";
        const cartLink = document.createElement("a");
        cartLink.href = "./Cart.html";

        const cartIcon = document.createElement("i");
        cartIcon.classList.add("fa-solid", "fa-shopping-cart", "cart");

        cartLink.appendChild(cartIcon);

        des.appendChild(h5);
        des.appendChild(starDiv);
        des.appendChild(price);
        des.appendChild(cartLink);

        productCard.appendChild(imgContainer);
        productCard.appendChild(des);

        newsArrival.appendChild(productCard);
      }
    });
    return data;
  })
  .then((data) => {
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((item) => {
      item.addEventListener("click", (e) => {
        const productName =
          e.currentTarget.querySelector(".truncate").textContent;
        data.products.forEach((item) => {
          if (item.name == productName) {
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
