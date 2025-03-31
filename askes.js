const popupBenefit = document.getElementById("popup-benefit");
const closeConfirmation = document.getElementById("close-detail");

closeConfirmation.addEventListener("click", function () {
    popupBenefit.style.display = "none";
});