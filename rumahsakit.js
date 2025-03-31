document.addEventListener("DOMContentLoaded", function () {
    // Pilih elemen popup
    const popupMobile = document.getElementById("popup-benefit-mobile");
    const popupDesktop = document.getElementById("popup-benefit-desktop");

    // Pilih tombol close
    const closeMobile = document.getElementById("close-detail-mobile");
    const closeDesktop = document.getElementById("close-detail-desktop");

    // Menampilkan popup saat halaman pertama kali dibuka
    if (popupMobile) {
        popupMobile.style.display = "flex"; // Menampilkan popup mobile
    }
    if (popupDesktop) {
        popupDesktop.style.display = "flex"; // Menampilkan popup desktop
    }

    // Event Listener untuk menutup popup mobile
    if (closeMobile) {
        closeMobile.addEventListener("click", function () {
            if (popupMobile) {
                popupMobile.style.display = "none"; // Menyembunyikan popup mobile
            }
        });
    }

    // Event Listener untuk menutup popup desktop
    if (closeDesktop) {
        closeDesktop.addEventListener("click", function () {
            if (popupDesktop) {
                popupDesktop.style.display = "none"; // Menyembunyikan popup desktop
            }
        });
    }
});




