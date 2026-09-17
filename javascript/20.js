// soal20.js
let hasil = [1];
let n = 1;
const tambah = [1, 2, 3];
for (let i = 0; i < 12; i++) {
  n += tambah[i % 3];
  hasil.push(n);
}
console.log(hasil.join(' '));