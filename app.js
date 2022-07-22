const container = document.getElementById("container");
const btns = document.createElement("div");
container.appendChild(btns).classList.add("buttons");
const display = document.querySelector("#display");

const data = [
  "C",
  "/",
  "*",
  "←",
  7,
  8,
  9,
  "-",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  ".",
  "(",
  0,
  ")",
  "=",
];

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
left.classList.add("operator");
right.classList.add("operator");

const operators = document.querySelectorAll(".operator");
const arr = [...operators];


function findElem() {
  let arrMap = arr.find(x => x.includes(display.innerText) );
  console.log(arrMap);
}
// console.log(arr)
operators.forEach((x) => {
  x.addEventListener("click", () => {
    // console.log(x)
  });
});
// console.log(arr[display.innerText.charAt(display.innerText.length - 1)].innerHTML)
clearBtn.addEventListener("click", clearText);
deleteBtn.addEventListener("click", deleteText);

let newArr = []
const buttons = [...document.getElementsByClassName("button")];
buttons.map((x) => {
  x.addEventListener("click", (e) => {
    // if(arr.indexOf(e.target)) return
    // console.log(display.innerText.charAt(display.innerText.length - 1))
    // console.log(arr[display.innerText.length - 1].textContent)
    // console.log(arr[display.innerText.length - 1].textContent === display.innerText.charAt(display.innerText.length - 1))
    // for(let i = 0; i < display.innerText.length; i++) {
    //   console.log(arr[i].textContent === display.innerText.charAt(display.innerText.length - 1))
    //   if(arr[i].textContent === display.innerText.charAt(display.innerText.length - 1)) return
    // }
    if (
      e.target.classList.contains("number") ||
      e.target.classList.contains("operator")
    ) {
      // console.log(e.target.innerText === display.innerText.charAt(display.innerText.length - 1))
      // console.log(e.target.innerText)
      // console.log(display.innerText)
      // console.log(e.target.classList)
      if (
        e.target === period &&
        display.innerText.includes(".") &&
        !display.innerText.includes("operator")
      )
        return;
      display.innerText += e.target.innerText;
      newArr.push(e.target.classList)
      console.log(newArr)
    }
    switch (e.target.innerText) {
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          console.error("nope");
        }
        return;
    }
  });
});

function clearText() {
  display.innerText = "";
  if (display.innerText < 0) return;
}

function deleteText() {
  if (display.innerText < 0) return;
  display.innerText = display.innerText.slice(0, -1);
}

// console.log(e.target.innerText)
// console.log(typeof(e.target.innerText))
// if(numbers.indexOf(e.target.innerText)) console.log(true)
