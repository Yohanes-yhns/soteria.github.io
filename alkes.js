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
    
    // Mengambil elemen popup detail
    const buyButtons = document.querySelectorAll(".buy-btn");
    const popupDetail = document.getElementById("popup-detail");
    const popupImage = document.getElementById("popup-image");
    const popupName = document.getElementById("popup-name");
    const popupQuantity = document.getElementById("popup-quantity");
    const popupPrice = document.getElementById("popup-price");
    const closeDetail = document.querySelector(".close-detail");
    const confirmButton = document.getElementById("confirm-btn");

    // Event listener untuk tombol "Beli"
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = button.closest(".product-card1, .product-card2, .product-card3, .product-card4, .product-card5, .product-card6, .product-card7, .product-card8, .product-card9, .product-card10, .product-card11, .product-card12, .product-card13, .product-card14, .product-card15");
            if (!productCard) {
                console.error("Product card tidak ditemukan!");
                return;
            }
            // Mengambil data dari product card
            const productImage = productCard.querySelector(".product-image").src;
            const productName = productCard.querySelector(".product-name").textContent;
            const productQuantity = parseInt(productCard.querySelector(".quantity-input").value);
            let productPrice = productCard.querySelector(".product-price").textContent;

            productPrice = parseInt(productPrice.replace("Rp ", "").replace(/\./g, ""));
            // Hasil total harga = harga produk * jumlah produk
            const totalPrice = productPrice * productQuantity;
            // Masukkan data ke popup detail
            popupImage.src = productImage;
            popupName.textContent = productName;
            popupQuantity.textContent = productQuantity;
            popupPrice.textContent = `Rp. ${totalPrice.toLocaleString("id-ID")}`;

            // Tampilkan popup pertama
            popupDetail.style.display = "flex";
        });
    });

    // Event listener untuk tombol close di popup pertama
    closeDetail.addEventListener("click", function () {
        popupDetail.style.display = "none";
    });
    // Mengambil elemen popup-form
    const popupForm = document.getElementById("popup-form");
    const formImage = document.getElementById("form-image");
    const formName = document.getElementById("form-name");
    const formQuantity = document.getElementById("form-quantity");
    const formPrice = document.getElementById("form-price");
    const closeForm = document.querySelector(".close-form");
    const submitOrder = document.getElementById("submit-order");

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

    // Ambil elemen popup konfirmasi
    const popupConfirmation = document.getElementById("popup-confirmation");
    const confirmName = document.getElementById("confirm-name");
    const confirmAddress = document.getElementById("confirm-address");
    const confirmPhone = document.getElementById("confirm-phone");
    const confirmShipping = document.getElementById("confirm-shipping");
    const confirmPayment = document.getElementById("confirm-payment");
    const confirmProduct = document.getElementById("confirm-product");
    const confirmQuantity = document.getElementById("confirm-quantity");
    const confirmPrice = document.getElementById("confirm-price");
    const closeConfirmation = document.querySelector(".close-confirmation");
    const confirmFinal = document.getElementById("confirm-final");

    submitOrder.addEventListener("click", function () {
        // Ambil nilai input
    const fullname = document.getElementById("fullname").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const shipping = document.getElementById("shipping").value;
    const payment = document.getElementById("payment").value;
        
        // Cek apakah ada input yang kosong
        if (fullname === "" || address === "" || phone === "") {
            alert("Harap isi semua kolom sebelum memesan!");
            return; // Hentikan proses jika ada yang kosong
        }
    
    const formattedTotal = parseInt(formPrice.textContent.replace(/\D/g, "")).toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    confirmName.textContent = fullname;
    confirmAddress.textContent = address;
    confirmPhone.textContent = phone;
    confirmShipping.textContent = shipping;
    confirmPayment.textContent = payment;
    confirmProduct.textContent = formName.textContent;
    confirmQuantity.textContent = formQuantity.textContent;
    confirmPrice.textContent = formattedTotal;

    // Tampilkan popup konfirmasi
    popupForm.style.display = "none";
    popupConfirmation.style.display = "flex";
    });

// Event listener untuk tombol close di popup konfirmasi
    closeConfirmation.addEventListener("click", function () {
    popupConfirmation.style.display = "none";
    });

    const popupThankYou = document.getElementById("popup-thankyou");
    const viewCartButton = document.getElementById("view-cart");

// Event listener untuk tombol "Konfirmasi" terakhir
    confirmFinal.addEventListener("click", function () {
        popupForm.style.display = "none";

        // Tampilkan popup terakhir
        popupThankYou.style.display = "flex";
    });
    
    // Event untuk tombol "Lihat Keranjang"
    viewCartButton.addEventListener("click", function () {
        window.location.href = "index.html"; // Ubah ke halaman keranjang pesanan
    });
    const popupBenefit = document.getElementById("popup-benefit");
    const closeConfirmationBenefit = document.getElementById("close-detail-benefit");

    if (popupBenefit && closeConfirmationBenefit) {
        closeConfirmationBenefit.addEventListener("click", function () {
            popupBenefit.style.display = "none";
        });
    } else {
        console.error("Popup atau tombol close tidak ditemukan di DOM.");
    }
    
});
    
    


