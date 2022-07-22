const container = document.getElementById("container");
const btns = document.createElement("div");
container.appendChild(btns).classList.add("buttons");
const display = document.querySelector("#display");

const data = ["C","/","*","←",7,8,9,"-",4,5,6,"+",1,2,3,".","(",0,")","=",];

(() => {
  let i = 0;
  data.map((x) => {
    const div = document.createElement("div");
    if (typeof x === "number") {
      div.classList.add("number");
    } else {
      div.setAttribute("id", i++);
    }
    div.textContent = x;
    btns.appendChild(div).classList.add("button");
  });
})();

const equals = btns.lastChild;
equals.setAttribute("id", "equal");

const clearBtn = document.getElementById("0");
const deleteBtn = document.getElementById("3");

const period = document.getElementById("6");
const divide = document.getElementById("1");
const multiply = document.getElementById("2");
const subtract = document.getElementById("4");
const add = document.getElementById("5");
const left = document.getElementById("7");
const right = document.getElementById("8");

period.classList.add("operator");
divide.classList.add("operator");
multiply.classList.add("operator");
subtract.classList.add("operator");
add.classList.add("operator");
left.classList.add("operator", "parenthesis-left");
right.classList.add("operator", "parenthesis-right");

clearBtn.addEventListener("click", clearText);
deleteBtn.addEventListener("click", deleteText);

let newArr = [];
const buttons = [...document.getElementsByClassName("button")];

buttons.map((x) => {
  x.addEventListener("click", (e) => {
    if (e.target.classList.contains("number") ||e.target.classList.contains("parenthesis-left") || (e.target.classList.contains("operator") && display.innerText.length > 0)) {

      newArr.push(e.target.classList.value);
      if (display.innerText.length >= 0) {
        if (newArr[display.innerText.length - 1] === "button operator" && e.target.classList.value === "button operator") return;
      }
      display.innerText += e.target.innerText;
      if (display.innerText.length >= 1) {
        if (e.target.classList.value === newArr[display.innerText.length - 1]) {

        }
      }
    }
    if (e.target === equals) {
      if (display.innerText.length > 1) {
        try {
          display.innerText = eval(display.innerText);
        } catch(err) {
          console.error(err)
        } 
      }
    }
  });
});

function clearText() {
  display.innerText = "";
  newArr = [];
  if (display.innerText < 0) return;
}

function deleteText() {
  if (display.innerText < 0) return;
  display.innerText = display.innerText.slice(0, -1);
  newArr.pop();
}
