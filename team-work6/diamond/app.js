const buton = document.getElementById("btn");
const input = document.getElementById("input");
const star = document.getElementById("star");

input.addEventListener("change", function () {
  // console.log(input.value);
  diamond(input.value)
});
console.log(star);



function diamond() {

  let n = input.value;

  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  star.innerHTML = string;
}