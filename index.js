document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen untuk versi mobile
    let formWrapperMobile = document.getElementById("formWrapper");
    let loginBtnMobile = document.getElementById("loginBtn");
    let closeBtnMobile = document.getElementById("closeBtn");

    // Ambil elemen untuk versi desktop
    let formWrapperDesktop = document.getElementById("formWrapper-desktop");
    let loginBtnDesktop = document.getElementById("loginBtnDesktop");
    let closeForm = document.getElementById("closeForm"); // Perbaikan ID close button desktop

    // Debugging: Cek apakah elemen ditemukan
    console.log("Login Button Desktop:", loginBtnDesktop);
    console.log("Form Wrapper Desktop:", formWrapperDesktop);
    console.log("Close Button Desktop:", closeForm);

    // === MOBILE LOGIN POPUP ===
    if (loginBtnMobile && formWrapperMobile) {
        loginBtnMobile.addEventListener("click", function () {
            formWrapperMobile.style.display = "flex";
        });
    }

    if (closeBtnMobile && formWrapperMobile) {
        closeBtnMobile.addEventListener("click", function () {
            formWrapperMobile.style.display = "none";
        });

        formWrapperMobile.addEventListener("click", function (e) {
            if (e.target === formWrapperMobile) {
                formWrapperMobile.style.display = "none";
            }
        });

        window.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                formWrapperMobile.style.display = "none";
            }
        });
    }

    // === DESKTOP LOGIN POPUP ===
    if (loginBtnDesktop && formWrapperDesktop) {
        loginBtnDesktop.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Tombol login desktop diklik!");
            formWrapperDesktop.style.display = "flex"; // Menggunakan flex agar layout tetap rapi
        });
    }

    if (closeForm && formWrapperDesktop) { // Pastikan ID sesuai
        closeForm.addEventListener("click", function () {
            formWrapperDesktop.style.display = "none";
        });

        formWrapperDesktop.addEventListener("click", function (e) {
            if (e.target === formWrapperDesktop) {
                formWrapperDesktop.style.display = "none";
            }
        });

        window.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                formWrapperDesktop.style.display = "none";
            }
        });
    }
});
