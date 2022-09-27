const textEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingcounterEl = document.getElementById("remaining-counter");

textEl.addEventListener("keyup", () => {
    updateCounter()
});

function updateCounter() {
    totalcounterEl.innerText = textEl.value.length;
    remainingcounterEl.innerText = textEl.getAttribute("maxLength") - textEl.value.length;
}