// Constant section computers variables
const COMPUTER_FIRST = document.getElementById("section__first");
const COMPUTER_SECOND = document.getElementById("section__second");
const COMPUTER_THIRD = document.getElementById("section__third");
const COMPUTER_BTNS = document.querySelectorAll(".btns");
const EARN_BTN = document.querySelector(".btn__earn");
const COMPUTER_LIST = document.querySelector(".computer__list ul");

// Global variables
let money = 2000;
let computerCost;
let computerName;
let computers = [];

// Money information
let SECTION_STATS = document.querySelector(".section__stats");
const element = document.createElement("div");
SECTION_STATS.appendChild(element);
element.innerHTML = "<h3>Your money is " + money + "$</h3>";
element.style.margin = "15px";

if (EARN_BTN) {
  EARN_BTN.addEventListener("click", () => {
    money = money + 100;
    element.innerHTML = "<h3>Your money is " + money + "$</h3>";
  });
}

// Btn func
COMPUTER_BTNS.forEach((item) => {
  item.addEventListener("click", function () {
    buyComputer(parseInt(item.value));
  });
});

// Func to buy a computer
function buyComputer(num) {
  switch (num) {
    case 1:
      buyAction(2000, 1);
      break;
    case 2:
      buyAction(4500, 2);
      break;
    case 3:
      buyAction(3000, 3);
      break;
  }
}
// Main function to buy type of computer, and calculate costs
function buyAction(computerCost, type) {
  if (computerCost > money) {
    alert("You dont have a money to buy this computer!");
    return;
  } else {
    money -= computerCost;
    switch (type) {
      case 1:
        computerName = "Gaming RTX 2060 Computer";
        computers.push(computerName);
        COMPUTER_FIRST.style.display = "none";
        break;
      case 2:
        computerName = "Gaming RTX 3060 Computer";
        computers.push(computerName);
        COMPUTER_SECOND.style.display = "none";
        break;
      case 3:
        computerName = "Gaming RTX 2080 Computer";
        computers.push(computerName);
        COMPUTER_THIRD.style.display = "none";
        break;
      default:
        alert("You choose incorrect type of computer!!!");
        break;
    }
    element.innerHTML = "<h3>Your money is " + money + "$</h3>";
    console.log(computers);
    const elem = document.createElement("li");
    COMPUTER_LIST.appendChild(elem);
    elem.innerText += computerName;
  }
}
