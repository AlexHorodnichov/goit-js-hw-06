const textEl = document.querySelector("#text");
const fontSizeControl = document.querySelector("#font-size-control");

fontSizeControl.addEventListener("input", (event) => {
  const size = fontSizeControl.value;
  textEl.style.fontSize = size + "px";

   console.log(size);
});
