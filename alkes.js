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

document.addEventListener("DOMContentLoaded", function () {
    const submitOrderBtn = document.getElementById("submit-order");
    const cartIcon = document.querySelector(".icon-link-keranjang");
    const cartPopup = document.getElementById("cart-popup"); // Popup keranjang
    const cartItemsContainer = document.getElementById("cart-items"); // Tempat menampilkan pesanan di popup
    const closeCartPopup = document.querySelector(".close-cart");

    // Simpan pesanan ke localStorage saat "Pesan Sekarang" diklik
    submitOrderBtn.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const orderData = {
            image: document.getElementById("form-image").src,
            name: document.getElementById("form-name").textContent,
            quantity: document.getElementById("form-quantity").textContent,
            price: document.getElementById("form-price").textContent
        };

        cart.push(orderData);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Pesanan telah ditambahkan ke keranjang!"); // Notifikasi sukses

        // Sembunyikan popup form setelah pesan disimpan
        document.getElementById("popup-form").style.display = "none";
    });

    // Tampilkan popup keranjang saat ikon keranjang diklik
    cartIcon.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Keranjang kosong!</p>";
        } else {
            cart.forEach((item, index) => {
                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <img src="${item.image}" class="cart-item-image">
                    <div class="cart-item-info">
                        <p class="cart-item-name">${item.name}</p>
                        <p>Qty: ${item.quantity}</p>
                        <p>Harga: ${item.price}</p>
                    </div>
                    <button class="remove-item" data-index="${index}">Hapus</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        cartPopup.style.display = "flex";
    });

    // Hapus item dari keranjang
    cartItemsContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-item")) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartIcon.click(); // Refresh popup
        }
    });

    // Tutup popup keranjang
    closeCartPopup.addEventListener("click", function () {
        cartPopup.style.display = "none";
    });
});




