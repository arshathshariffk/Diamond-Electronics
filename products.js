/* =========================
   PRODUCT SEARCH
========================= */

const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const title = product.querySelector("h3").innerText.toLowerCase();

    const description = product.querySelector("p").innerText.toLowerCase();

    if (title.includes(searchValue) || description.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

/* =========================
   CATEGORY FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    products.forEach((product) => {
      const category = product.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        product.style.display = "block";

        product.style.animation = "fadeIn .5s ease";
      } else {
        product.style.display = "none";
      }
    });
  });
});

/* =========================
   PRODUCT MODAL
========================= */

const modal = document.getElementById("productModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const closeBtn = document.querySelector(".close-btn");

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.parentElement;

    const title = card.querySelector("h3").innerText;

    const description = card.querySelector("p").innerText;

    const price = card.querySelector("h4").innerText;

    modalTitle.innerText = title;

    modalDescription.innerHTML = `
${description}
<br><br>
Price: ${price}
<br><br>
Warranty Available
<br>
Installation Support
<br>
24/7 Service Support
`;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* =========================
   PRODUCT COUNT
========================= */

function updateProductCount() {
  const visibleProducts = Array.from(products).filter((product) => {
    return product.style.display !== "none";
  });

  const countBox = document.getElementById("productCount");

  if (countBox) {
    countBox.innerText = visibleProducts.length;
  }
}

updateProductCount();

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(updateProductCount, 100);
  });
});

searchInput.addEventListener("keyup", () => {
  setTimeout(updateProductCount, 100);
});

/* =========================
   PRODUCT CARD HOVER
========================= */

products.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const x = e.offsetX / card.offsetWidth;

    const y = e.offsetY / card.offsetHeight;

    card.style.transform = `rotateY(${(x - 0.5) * 20}deg)
 rotateX(${(0.5 - y) * 20}deg)
 translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

/* =========================
   PRODUCT LOADING EFFECT
========================= */

window.addEventListener("load", () => {
  products.forEach((product, index) => {
    setTimeout(() => {
      product.classList.add("show");
    }, index * 100);
  });
});

/* =========================
   FADE ANIMATION
========================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

from{

opacity:0;
transform:translateY(20px);

}

to{

opacity:1;
transform:translateY(0);

}

}

`;

document.head.appendChild(style);
