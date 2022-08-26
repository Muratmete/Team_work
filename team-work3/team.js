//? cümleyi ters çeviren kod..

// let sentence = prompt("Bir cümle giriniz:");
// let yeni = "";
// let sen = sentence.split(" ");
// console.log(sen.length);

// for (let i = sen.length - 1; i >= 0; --i) {
//   yeni += sen[i] + " ";
// }
// console.log(yeni);

//? stringi ters çeviren kod..
let kelime = prompt("Bİr kelime girin:");
let ters = "";
let harf = kelime.split("");
console.log(harf);

for (let i = harf.length - 1; i >= 0; --i) {
  ters += harf[i];
}
console.log(ters);
