var preview = document.querySelector(".animales-preview");
var previewBox = preview.querySelectorAll(".preview");

document.querySelectorAll(".container-fluid .tarjeta").forEach(tarjeta => {
    tarjeta.onclick = () => {
        preview.style.display = "flex";
        var nombre = tarjeta.getAttribute("data-name");
        previewBox.forEach(preview => {
            var target = preview.getAttribute("data-target");
            if (nombre == target) {
                preview.classList.add("activo");
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector(".close").onclick = () => {
        close.classList.remove("activo");
        preview.style.display = "none";
    };
});
