// soal15.js
let hasil = '';
for (let i = 8; i >= 1; i--) {
  const sisa = i % 4;
  if (sisa === 0 || sisa === 3) {
    for (let j = i; j >= 1; j--) hasil += j;
  } else {
    hasil += String(i).repeat(i);
  }
}
console.log(hasil);