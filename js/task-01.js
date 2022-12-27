const totalItem = document.querySelectorAll(".item");
const totalItemali = totalItem.length;

console.log(`Number of categories: ${totalItemali}`);

totalItem.forEach((element) => {
  const elementTitle = element.querySelector("h2").textContent;
  const elementList = element.querySelectorAll("li");
  const elementLength = elementList.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${elementLength}`);
});
