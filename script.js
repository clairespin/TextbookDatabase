console.log("JS is connected")
document.querySelectorAll(".show-request").forEach(button => {
    button.addEventListener("click", function () {
        const container = document.querySelector(".request-container");
        container.style.display = "flex";
    });
});

document.querySelectorAll(".hide-request").forEach(button => {
    button.addEventListener("click", function () {
        const container = document.querySelector(".request-container");
        container.style.display = "none";
    });
});

document.querySelectorAll(".hide-request").forEach(button => {
    button.addEventListener("click", function () {
        const container = document.querySelector(".request-container");
        container.style.display = "none";
    });
});

const Classes = ["SCLA","CNIT"];
const Textbooks = []