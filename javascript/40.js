const tinggi = 10;
const lebar = 20;
let baris = 0;

function animasi() {
  console.clear();

  for (let i = 0; i < tinggi; i++) {
    if (i === baris) {
      console.log(' '.repeat(lebar - 1) + '0');
    } else {
      console.log('');
    }
  }

  baris++;
  if (baris >= tinggi) {
    baris = 0; // sudah sampai bawah, ulangi lagi dari atas
  }

  setTimeout(animasi, 200);
}

animasi();