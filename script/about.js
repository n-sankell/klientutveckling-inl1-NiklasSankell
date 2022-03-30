let infoContainer = document.querySelector("#infoContainer");
let employeeName = document.createElement("h3");
let employeeInfo = document.createElement("p");

const ceo = document.querySelector("#ceo");
const designer = document.querySelector("#designer");
const sheperd = document.querySelector("#sheperd");
const woolcutter = document.querySelector("#woolcutter");
const spinner = document.querySelector("#spinner");
const care = document.querySelector("#care");

ceo.addEventListener("mouseenter", () => {
    appendInfo("CEO - Maggie","ahfkagh");
});

designer.addEventListener("mouseenter", () => {
    appendInfo("Designer - Margot","xzxxasasdsdcvvvv");
});

sheperd.addEventListener("mouseenter", () => {
    appendInfo("Sheperd - Willie","jhgjhgjghjyrret");
});

woolcutter.addEventListener("mouseenter", () => {
    appendInfo("Woolcutter - Tommy","asgsagasgasgggee");
});

spinner.addEventListener("mouseenter", () => {
    appendInfo("Thread spinner - Ailsi","agasgasgasg");
});

care.addEventListener("mouseenter", () => {
    appendInfo("Animal care - Lewis","gsdgagag");
});

const appendInfo = (title, text) => {
    infoContainer.innerHTML = 
    `
    <h3>${title}</h3>
    <p>${text}</p>
    `;
}