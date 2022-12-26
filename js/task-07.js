const inputList = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);


inputList.addEventListener(`input`, (event) => {
    text.style.fonSize = event.currentTarget.value + "px";
    console.log(inputList);
} )
