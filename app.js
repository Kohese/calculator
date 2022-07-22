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

clearBtn.addEventListener("click", clearText);
deleteBtn.addEventListener("click", deleteText);

const buttons = [...document.getElementsByClassName("button")];
buttons.map((x) => {
  x.onclick = isLoaded = false;
  x.addEventListener("click", (e) => {
    // else {
    display.innerText.slice(0, -1);
    if (e.target.classList.contains("number") || e.target.id === "6") {
      isLoaded = false;
      console.log(display.innerText.slice(0, 1));
      display.innerText.slice(0, 1);
      display.innerText += e.target.innerText;
      let value = display.innerText;
      console.log(value)
    }
    getCurrentValue(e.target);
  });
});

function getCurrentValue(value) {
  if (value) {
    console.log(value.innerText, value.id);
  }
}
function clearText() {
  display.innerText = "";
}

function deleteText() {
  display.innerText = display.innerText.slice(0, -1);
  console.log("done");
}


// console.log(e.target.innerText)
// console.log(typeof(e.target.innerText))
// if(numbers.indexOf(e.target.innerText)) console.log(true)
