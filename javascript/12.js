let hasil = '';
for (let i = 1; i <= 9; i++) {
  const posisi = (i - 2 + 4) % 4; // menentukan posisi dalam siklus 4
  if (posisi === 0 || posisi === 3) {
    // diulang
    hasil += String(i).repeat(i);
  } else {
    // berurutan
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  }
}
console.log(hasil);