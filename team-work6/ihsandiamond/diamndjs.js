// let ciz = (n) => {
//   let str = "";
//   let a = n;
//   let counter = 0;
//   let half = n;
//   let brk = n * 2 - 1;
//   while (brk > 0) {
//     for (let i = 1; i <= a; i++) {
//       if (i == n || i == a) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//     str += "\n";
//     counter++;
//     if (counter < half) {
//       a++;
//       n--;
//     } else {
//       a--;
//       n++;
//     }

//     brk--;
//   }
//   return str;
// };

// n = a      2. döngüm a kadar   2n-1

// bbb*bbb     4     n a  n-- a++  str= "\n"
// bb*b*bb    3-5    n a   if( i==n || i ==a) str += "*" else str += " "
// b*bbb*b    2-6
// *bbbbb*    1-7
// b*bbb*b    2-6
// bb*b*bb
// bbb*bbb

// ciz(4)

let ciz1 = (n) => {
  let str = "";
  let a = n;
  let döngü = 2 * n - 1;
  let half = n;
  let sayac = 0;

  while (n > 0) {
    for (let i = 1; i <= a; i++) {
      if (i == n || i == a) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
    n--;
    a++;
  }

  while (half > 0) {
    n++;
    a--;
    for (let i = 1; i <= a; i++) {
      if (i == n || i == a) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";

    half--;
    // sayac++;
    // if (sayac >= half) {
    //   n++;
    //   a--;
    // } else {
    //   n--;
    //   a++;
    // }

    döngü--;
  }
  console.log(str);
};
ciz1(5);
