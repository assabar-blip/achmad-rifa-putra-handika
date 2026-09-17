let hasil = '';
for (let i = 6; i >= 1; i--) {
  if (i % 2 === 0) {
    // i genap: angka diulang
    hasil += String(i).repeat(i);
  } else {
    // i ganjil: urutan naik
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  }
}
console.log(hasil);