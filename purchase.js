document.addEventListener("DOMContentLoaded", function () {
    const orderData = JSON.parse(localStorage.getItem("orderData"));

    if (orderData) {
        document.getElementById("summary-image").src = orderData.image;
        document.getElementById("summary-name").textContent = orderData.name;
        document.getElementById("summary-quantity").textContent = orderData.quantity;
        document.getElementById("summary-price").textContent = orderData.price;
        document.getElementById("summary-buyer").textContent = orderData.buyerName;
        document.getElementById("summary-address").textContent = orderData.buyerAddress;
        document.getElementById("summary-phone").textContent = orderData.buyerPhone;
        document.getElementById("summary-payment").textContent = orderData.paymentMethod;
        document.getElementById("summary-shipping").textContent = orderData.shippingMethod;
    } else {
        document.getElementById("order-summary").innerHTML = "<p>Tidak ada data pesanan.</p>";
    }
});
