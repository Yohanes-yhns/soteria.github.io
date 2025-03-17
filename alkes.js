document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tombol tambah dan kurang
    const minusButtons = document.querySelectorAll(".quantity-btn:first-child");
    const plusButtons = document.querySelectorAll(".quantity-btn:last-child");

    minusButtons.forEach(button => {
        button.addEventListener("click", function () {
            changeQuantity(this, -1);
        });
    });

    plusButtons.forEach(button => {
        button.addEventListener("click", function () {
            changeQuantity(this, 1);
        });
    });

    function changeQuantity(button, change) {
        const quantityInput = button.parentElement.querySelector(".quantity-input");
        let currentValue = parseInt(quantityInput.value);

        if (isNaN(currentValue)) {
            currentValue = 1;
        }

        let newValue = currentValue + change;
        if (newValue < 1) newValue = 1;

        quantityInput.value = newValue;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tombol "Beli"
    const buyButtons = document.querySelectorAll(".buy-btn");
    const popupDetail = document.getElementById("popup-detail");
    const popupImage = document.getElementById("popup-image");
    const popupName = document.getElementById("popup-name");
    const popupQuantity = document.getElementById("popup-quantity");
    const popupPrice = document.getElementById("popup-price");
    const closeDetail = document.querySelector(".close-detail");
    const confirmButton = document.getElementById("confirm-btn");

    const popupForm = document.getElementById("popup-form");
    const formImage = document.getElementById("form-image");
    const formName = document.getElementById("form-name");
    const formQuantity = document.getElementById("form-quantity");
    const formPrice = document.getElementById("form-price");
    const closeForm = document.querySelector(".close-form");

    // Event listener untuk tombol "Beli"
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = button.closest(".product-card1, .product-card2, .product-card3, .product-card4, .product-card5, .product-card6, .product-card7, .product-card8, .product-card9, .product-card10, .product-card11, .product-card12, .product-card13, .product-card14, .product-card15");
            const productImage = productCard.querySelector(".product-image").src;
            const productName = productCard.querySelector(".product-name").textContent;
            const productQuantity = productCard.querySelector(".quantity-input").value;
            const productPrice = productCard.querySelector(".product-price").textContent;

            // Masukkan data ke popup pertama
            popupImage.src = productImage;
            popupName.textContent = productName;
            popupQuantity.textContent = productQuantity;
            popupPrice.textContent = productPrice;

            // Tampilkan popup pertama
            popupDetail.style.display = "flex";
        });
    });

    // Event listener untuk tombol close di popup pertama
    closeDetail.addEventListener("click", function () {
        popupDetail.style.display = "none";
    });

    // Event listener untuk tombol "Konfirmasi"
    confirmButton.addEventListener("click", function () {
        // Copy data ke popup form
        formImage.src = popupImage.src;
        formName.textContent = popupName.textContent;
        formQuantity.textContent = popupQuantity.textContent;
        formPrice.textContent = popupPrice.textContent;

        // Sembunyikan popup pertama, munculkan popup kedua
        popupDetail.style.display = "none";
        popupForm.style.display = "flex";
    });

    // Event listener untuk tombol close di popup form
    closeForm.addEventListener("click", function () {
        popupForm.style.display = "none";
    });
});



