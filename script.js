console.log("JS is connected")
document.getElementById("show-request").addEventListener("click", function () {
    const container = document.querySelector(".request-container");
    container.style.display = "flex";
});
document.getElementById("hide-request").addEventListener("click", function () {
    const container = document.querySelector(".request-container");
    container.style.display = "none";
});
