const caroussel = document.querySelector(".caroussel");
const span = document.querySelector("span");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

let table = [{ title: "Première image", url: "../public/testing/img-01.jpg", }, { title: "Deuxième image", url: "../public/testing/img-06.jpg", }, { title: "Troisième image", url: "../public/testing/img-03.jpg", }, { title: "Quatième image", url: "../public/testing/img-04.jpg", }, { title: "Cinquième image", url: "../public/testing/img-07.jpg", }];

let index = 0;
function left() {
    table[index].title;
    index--;
    if (index < 0) {
        index = table.length - 1;
    }
    span.innerHTML = table[index].title;
    caroussel.style.backgroundImage = `url(${table[index].url})`;
}

function right() {
    table[index].title;
    index++;
    if (index > table.length - 1) {
        index = 0;
    }
    span.innerHTML = table[index].title;
    caroussel.style.backgroundImage = `url(${table[index].url})`;
}

arrowLeft.addEventListener("click", left)
arrowRight.addEventListener("click", right)