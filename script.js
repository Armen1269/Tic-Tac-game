let item = document.querySelectorAll(".item");
console.log(item, "item");
let start = document.querySelector(".start");
let xOrO = document.querySelector(".xOrO");
let array = ["X"];
console.log(array, "array");
let sc1 = document.querySelector(".sc1");
let sc2 = document.querySelector(".sc2");
let newStart = document.querySelector(".newStart");
let winnerText = document.querySelector(".x-o");
let count = 0;
console.log(NodeList.innerText);
xOrO.innerText = array[0];
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    if (item[i].innerText === "") {
      count++;
      console.log(count,"count");
      if (array[0] === "X") {
        item[i].innerText = "X";
        array[0] = "O";
        xOrO.innerText = array[0];
        winner("X");
      } else {
        item[i].innerText = "O";
        array[0] = "X";
        xOrO.innerText = array[0];
        winner("O");
      }
    }
  });
}
start.addEventListener("click", () => {
def();
	count = 0;
  array[0] = "X";
  xOrO.innerText = "X";
});

newStart.addEventListener("click", () => {
  setTimeout(() => {
		sc1.style.display = "flex";
    sc2.style.display = "none";
  }, 500);
 def();
	count = 0;
  array[0] = "X";
  xOrO.innerText = "X";
});

function winner(z) {
  console.log(count,"count");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < win.length; i++) {
    if (
      item[win[i][0]].innerText === z &&
      item[win[i][1]].innerText === z &&
      item[win[i][2]].innerText === z
    ) {
      openDisp();
      winnerText.innerText = z;
    } else if (
      count === 9 &&
      (item[win[i][0]].innerText !== z ||
        item[win[i][1]].innerText !== z ||
        item[win[i][2]].innerText !== z)
    ) {
      openDisp();
      winnerText.innerText = "nobody";
    }
  }
}

function openDisp() {
  setTimeout(() => {
    sc1.style.display = "none";
    sc2.style.display = "flex";
  }, 500);
}

function def() {
	  for (let i = 0; i < item.length; i++) {
    item[i].innerText = "";
  }
}
