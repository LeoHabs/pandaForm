const ageElement = document.getElementById("idade");
const rangeElement = document.getElementById("rangeInput")
const checkButtons = document.querySelector("input[type ='checkbox'");

rangeElement.addEventListener("change",()=>{
    ageElement.innerHTML = rangeElement.value;
})
