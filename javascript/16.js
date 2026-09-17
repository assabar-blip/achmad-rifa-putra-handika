// soal16.js
let hasil = [1];
let n = 1;
for (let i = 0; i < 11; i++) {
  n = (i % 2 === 0) ? n + 4 : n - 2;
  hasil.push(n);
}
console.log(hasil.join(' '));