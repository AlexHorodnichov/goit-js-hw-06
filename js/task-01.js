const navItemEl = [...document.querySelectorAll('li.item')];
console.log(navItemEl);

const navTitleEl = navItemEl.map((item) => {
const title = [...item.children];

const itemObj = {};

itemObj[title[0].textContent] = [...title[1].children].map(
  (item) => item.textContent
);

console.log(itemObj);
})
