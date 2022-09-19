let ciz = (n) => {
  let str = "";
  let a = n;
  let counter = 0;
  let half = n;
  let brk = n * 2 - 1;
  while (brk > 0) {
    for (let i = 1; i <= a; i++) {
      if (i == n || i == a) {
        str += "*";
      } else {
        str += "&nbsp;&nbsp;";
      }
    }
    str += "<br>";
    counter++;
    if (counter < half) {
      a++;
      n--;
    } else {
      a--;
      n++;
    }

    brk--;
  }
  return str;
};

let p = document.querySelector("#p");
let input = document.querySelector("#input");

input.addEventListener("change", () => {
  p.innerHTML = ciz(input.value);
});
