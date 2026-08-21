/* =========================================
   A2 FRIDGE MAGNETS
   JAVASCRIPT
========================================= */


/* ---------- WHATSAPP SETTINGS ---------- */

// Change this number later if needed.
// IMPORTANT: Keep country code and remove + and spaces.

const whatsappNumber = "918610295010";


const whatsappMessage =
    "Hi A2 Fridge Magnets! I’m interested in ordering customized fridge magnets. Please share the details. 😊";


const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/* ---------- ADD WHATSAPP LINK ---------- */

const whatsappLinks =
    document.querySelectorAll(".whatsapp-link");


whatsappLinks.forEach(function (link) {

    link.href = whatsappURL;

});


/* ---------- MOBILE MENU ---------- */

const menuToggle =
    document.getElementById("menuToggle");


const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


/* ---------- CLOSE MENU AFTER CLICK ---------- */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ---------- CURRENT YEAR ---------- */

const currentYear =
    document.getElementById("currentYear");


currentYear.textContent =
    new Date().getFullYear();


/* ---------- SCROLL ANIMATION ---------- */

const animatedElements =
    document.querySelectorAll(
        ".product-card, .why-card, .step, .review-card, .gallery-item"
    );


const observer =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* ---------- SMOOTH WHATSAPP CLICK ---------- */

whatsappLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Opening WhatsApp for A2 Fridge Magnets..."
        );

    });

});

/* =========================================
   PRODUCT DETAILS POPUP
========================================= */

const productData = {

    "custom-magnet": {
        name: "Customized Fridge Magnets",
        images: [
            "images/custom photo.jpg","images/Pokemon magnets.jpg",
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg"

        ],
        description:
            "Turn your favorite photos into beautiful personalized fridge magnets, perfect for keeping your special memories close every day. Only square shape is available.",
        details: "Square Shape • Customized Photo • Fridge Magnet"
    },

    "acrylic-magnet": {
        name: "Acrylic Frame Magnet",
        images: [
            "images/acrylic magnet.jpg",
"images/img5.jpg",
"images/img7.jpg",
"images/img8.jpg"
        ],
        description:
            "Preserve your beautiful memories with elegant acrylic frame magnets, specially customized to make your favorite moments extra special.",
        details: "Acrylic Frame • Customized Photo • Premium Finish"
    },

    "acrylic-keychain": {
        name: "Acrylic Frame Keychain",
        images: [
  "images/img10.jpg",
"images/img9.jpg",
"images/Photoframe Keychain.jpg",
"images/img14.jpg"
        ],
        description:
            "Carry your favorite memories wherever you go with a cute personalized acrylic frame keychain, perfect for everyday use or gifting.",
        details: "Acrylic • Personalized Photo • Keychain"
    },

    "polaroid": {
        name: "Customized Polaroid Photos",
        images: [
            "images/polaroid.jpg",
"images/img11.jpg",
"images/img12.jpg",
"images/img13.jpg"
        ],
        description:
            "Turn your favorite moments into beautiful Polaroid-style prints, perfect for room décor, memory walls, journaling and thoughtful gifts.",
        details: "Polaroid Style • Photo Prints • Perfect for Gifts"
    }

};


/* ---------- CREATE POPUP ---------- */

const productPopup = document.createElement("div");

productPopup.className = "product-popup";

productPopup.innerHTML = `
    <div class="product-popup-box">

        <button class="product-popup-close" aria-label="Close">
            &times;
        </button>

        <div class="product-popup-image-area">

            <button class="popup-prev" aria-label="Previous image">
                &#10094;
            </button>

            <img
                id="popupProductImage"
                src=""
                alt="Product Image"
            >

            <button class="popup-next" aria-label="Next image">
                &#10095;
            </button>

        </div>

        <div class="product-popup-info">

            <div class="popup-product-icon">✨</div>

            <h2 id="popupProductName"></h2>

            <p id="popupProductDescription"></p>

            <div
                id="popupProductDetails"
                class="popup-product-details">
            </div>

            <a
                href="#"
                id="popupOrderButton"
                class="btn btn-primary">
                <i class="fa-brands fa-whatsapp"></i>
                Order on WhatsApp
            </a>

        </div>

    </div>
`;


document.body.appendChild(productPopup);


/* ---------- POPUP ELEMENTS ---------- */

const popupImage =
    document.getElementById("popupProductImage");

const popupName =
    document.getElementById("popupProductName");

const popupDescription =
    document.getElementById("popupProductDescription");

const popupDetails =
    document.getElementById("popupProductDetails");

const popupOrderButton =
    document.getElementById("popupOrderButton");

const popupCloseButton =
    document.querySelector(".product-popup-close");

const popupPrevButton =
    document.querySelector(".popup-prev");

const popupNextButton =
    document.querySelector(".popup-next");


let currentProduct = null;
let currentImageIndex = 0;


/* ---------- SHOW PRODUCT ---------- */

function openProduct(productId) {

    const product =
        productData[productId];

    if (!product) return;

    currentProduct = product;

    currentImageIndex = 0;

    popupName.textContent = product.name;

    popupDescription.textContent =
        product.description;

    popupDetails.textContent =
        product.details;

    popupImage.src =
        product.images[currentImageIndex];

    popupImage.alt =
        product.name;

    popupOrderButton.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hi A2 Fridge Magnets! I’m interested in " +
            product.name +
            ". Please share the details. 😊"
        )}`;

    productPopup.classList.add("active");

    document.body.classList.add("popup-open");

}


/* ---------- PRODUCT CARD CLICK ---------- */

document
    .querySelectorAll(".product-clickable")
    .forEach(function (card) {

        card.addEventListener("click", function (event) {

            /*
            Don't open popup when clicking
            the existing WhatsApp button.
            */

            if (
                event.target.closest(".whatsapp-link")
            ) {
                return;
            }

            const productId =
                card.dataset.product;

            openProduct(productId);

        });

    });


/* ---------- NEXT IMAGE ---------- */

popupNextButton.addEventListener(
    "click",
    function () {

        if (!currentProduct) return;

        if (
            currentImageIndex <
            currentProduct.images.length - 1
        ) {

            currentImageIndex++;

        } else {

            currentImageIndex = 0;

        }

        popupImage.src =
            currentProduct.images[currentImageIndex];

    }
);


/* ---------- PREVIOUS IMAGE ---------- */

popupPrevButton.addEventListener(
    "click",
    function () {

        if (!currentProduct) return;

        if (currentImageIndex > 0) {

            currentImageIndex--;

        } else {

            currentImageIndex =
                currentProduct.images.length - 1;

        }

        popupImage.src =
            currentProduct.images[currentImageIndex];

    }
);


/* ---------- CLOSE POPUP ---------- */

function closeProductPopup() {

    productPopup.classList.remove("active");

    document.body.classList.remove("popup-open");

}


popupCloseButton.addEventListener(
    "click",
    closeProductPopup
);


/* ---------- CLOSE WHEN CLICKING OUTSIDE ---------- */

productPopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === productPopup
        ) {
            closeProductPopup();
        }

    }
);


/* ---------- ESC KEY ---------- */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {
            closeProductPopup();
        }

    }
);