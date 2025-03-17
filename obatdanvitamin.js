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
    const buyButtons = document.querySelectorAll(".buy-btn"); // Ambil semua tombol Beli
    const popup = document.getElementById("popup"); // Popup container
    const popupImage = document.getElementById("popup-image");
    const popupName = document.getElementById("popup-name");
    const popupQuantity = document.getElementById("popup-quantity");
    const popupPrice = document.getElementById("popup-price");
    const closeButton = document.querySelector(".close-btn");
    const confirmButton = document.getElementById("confirm-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            let productCard = this.closest(".product-card1, .product-card2, .product-card3, .product-card4, .product-card5, .product-card6, .product-card7, .product-card8, .product-card9, .product-card10, .product-card11, .product-card12, .product-card13, .product-card14");
            let productImage = productCard.querySelector(".product-image").src;
            let productName = productCard.querySelector(".product-name").innerText;
            let productQuantity = productCard.querySelector(".quantity-input").value;
            let productPrice = productCard.querySelector(".product-price").innerText.replace("Rp ", "").replace(".", ""); // Hapus "Rp" dan titik
            
            let totalPrice = parseInt(productQuantity) * parseInt(productPrice);

            // Tampilkan di popup
            popupImage.src = productImage;
            popupName.innerText = productName;
            popupQuantity.innerText = productQuantity;
            popupPrice.innerText = "Rp " + totalPrice.toLocaleString("id-ID");

            // Munculkan popup
            popup.style.display = "flex";
        });
    });

    // Tutup popup saat tombol close diklik
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Tutup popup saat klik di luar konten popup
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Tambahkan event konfirmasi (misalnya simpan ke database atau lanjut ke halaman lain)
    confirmButton.addEventListener("click", function () {
        alert("Pesanan dikonfirmasi!");
        popup.style.display = "none";
    });
});

