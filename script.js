const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
    });
});

function displayMessage() {
    document.getElementById("message").innerHTML =
        "Thank you for interacting with my personal webpage.";
}