// soal21.js
let hasil = [1];
let n = 1;
for (let i = 0; i < 9; i++) {
  n *= 2;
  hasil.push(n);
}
console.log(hasil.join(' '));