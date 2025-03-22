document.addEventListener("DOMContentLoaded", function () {
    const btnEdit = document.querySelector(".btn");
    let isEditing = false;

    btnEdit.addEventListener("click", function () {
        if (!isEditing) {
            enableEditing();
        } else {
            saveChanges();
        }
        isEditing = !isEditing;
    });

    function enableEditing() {
        document.querySelectorAll(".data-user h2").forEach((element) => {
            let currentText = element.textContent;
            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.classList.add("input-edit");
            element.replaceWith(input);
        });
        btnEdit.textContent = "Simpan";
    }

    function saveChanges() {
        document.querySelectorAll(".input-edit").forEach((input) => {
            let newText = input.value;
            let newElement = document.createElement("h2");
            newElement.textContent = newText;
            newElement.className = input.className.replace("input-edit", "");
            input.replaceWith(newElement);
        });
        btnEdit.textContent = "Edit";
    }
});
