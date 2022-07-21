const container = document.getElementById("container");
const btns = document.createElement("div");
container.appendChild(btns).classList.add('buttons');

const data = ["C","/","*","&larr;",
7,8,9,"-",
4,5,6,"+",
1,2,3,".",
"(","0",")","="];

(() => {
  data.map(x => {
    const div = document.createElement('div')
    div.textContent = x
    btns.appendChild(div).classList.add('button')
  })
})()

const equals = btns.lastChild
equals.setAttribute('id', 'equal')

