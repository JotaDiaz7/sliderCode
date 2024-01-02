var wrap_img = document.querySelectorAll(".elementor-widget-image");
    wrap_img = Array.from(wrap_img);
    wrap_img[0].classList.add("show");

for(var i = 0; i < wrap_img.length; i++){
    
    var right = document.createElement("div");
    right.classList.add("next");
    var left = document.createElement("div");
    left.classList.add("previous");
    wrap_img[i].querySelector(".elementor-widget-container").appendChild(right);
    wrap_img[i].querySelector(".elementor-widget-container").appendChild(left);
}

document.querySelectorAll(".next").forEach((next) => {
    next.addEventListener("click", () => {

        const current_img = wrap_img.findIndex((img) => img.classList.contains("show"));

        if (current_img !== -1) {
            wrap_img[current_img].classList.remove("show");

            const next_img = (current_img + 1) % wrap_img.length;
            
            wrap_img[next_img].classList.add("show");
        }
    });
});

document.querySelectorAll(".previous").forEach((previous) => {
    previous.addEventListener("click", () => {

        const current_img = wrap_img.findIndex((img) => img.classList.contains("show"));

        if (current_img !== -1) {
            wrap_img[current_img].classList.remove("show");

            const previous_img = (current_img - 1 + wrap_img.length) % wrap_img.length;
            
            wrap_img[previous_img].classList.add("show");
        }
    });
});