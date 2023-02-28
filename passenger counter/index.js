let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");

let count = 0;
// console.log(saveEl);
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";

  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  // console.log(count);
}

// let name = "abhi";
// let greeting = "hi, my name is";

// let myGreeting = greeting + name;

// console.log(myGreeting);

// let points = 4
// let bonusPoints = "10"
// let totalPoints =
