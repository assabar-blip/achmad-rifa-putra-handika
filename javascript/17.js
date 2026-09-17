// soal17.js
let hasil = [2];
let n = 2;
for (let i = 0; i < 9; i++) {
  n = (i % 2 === 0) ? n + 10 : n - 5;
  hasil.push(n);
}
console.log(hasil.join(' '));