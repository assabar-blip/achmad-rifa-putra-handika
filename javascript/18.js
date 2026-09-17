// soal18.js
let hasil = [5];
let n = 5;
for (let i = 0; i < 11; i++) {
  n = (i % 2 === 0) ? n - 3 : n + 5;
  hasil.push(n);
}
console.log(hasil.join(' '));
