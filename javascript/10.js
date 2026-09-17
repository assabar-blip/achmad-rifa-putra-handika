let hasil = '';
for (let i = 6; i >= 1; i--) {
  if (i % 2 === 0) {
    // i genap: urutan menurun
    for (let j = i; j >= 1; j--) {
      hasil += j;
    }
  } else {
    // i ganjil: angka diulang
    hasil += String(i).repeat(i);
  }
}
console.log(hasil);