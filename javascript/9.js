let hasil = '';
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    // baris genap: angka diulang
    hasil += String(i).repeat(i);
  } else {
    // baris ganjil: angka berurutan
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  }
}
console.log(hasil);