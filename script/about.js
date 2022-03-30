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
    appendInfo("CEO - Maggie","Maggie has been leading the company for over a decade. As the head of the family the skill to lead comes naturally");
});

designer.addEventListener("mouseenter", () => {
    appendInfo("Designer - Margot","With an unmatched eye for color and detail, Margot blends all colors and dyes all of our yarn with amaizing results");
});

sheperd.addEventListener("mouseenter", () => {
    appendInfo("Sheperd - Willie","Willie 'The Sheep Whisperer' is a natural shepherd. Once a feral child hwo got raised by a herd of sheep");
});

woolcutter.addEventListener("mouseenter", () => {
    appendInfo("Woolcutter - Tommy","No one can match Tommy when it comes to speed an precision in cutting wool. Tommy sharpens his cissors daily");
});

spinner.addEventListener("mouseenter", () => {
    appendInfo("Thread spinner - Ailsi","Yarn spun by hand gives the yarn a unique feeling, and Ailsi is a real master at the spinning wheel");
});

care.addEventListener("mouseenter", () => {
    appendInfo("Animal care - Lewis","The wellbeing of our sheep is our top priority, Lewis knows all about every helth aspect, form diet to illness");
});

const appendInfo = (title, text) => {
    infoContainer.innerHTML = 
    `
    <h3>${title}</h3>
    <p>${text}</p>
    `;
}