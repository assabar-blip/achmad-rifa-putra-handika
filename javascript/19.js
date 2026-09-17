// soal19.js
let hasil = [3];
let n = 3;
for (let i = 0; i < 9; i++) {
  n = (i % 2 === 0) ? n * 3 : n - 5;
  hasil.push(n);
}
console.log(hasil.join(' '));