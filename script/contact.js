const form = document.querySelector("#form");
const errand = document.querySelector("#errand");
const email = document.querySelector("#email");
const text = document.querySelector("#text");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Errand: ${errand.value} Email: ${email.value} Text: ${text.value}`)
});
