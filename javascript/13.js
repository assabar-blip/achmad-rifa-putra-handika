let hasil = '';
for (let i = 1; i <= 9; i++) {
  const sisa = i % 4;
  if (sisa === 1 || sisa === 2) {
    // berurutan
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  } else {
    // diulang
    hasil += String(i).repeat(i);
  }
}
console.log(hasil);