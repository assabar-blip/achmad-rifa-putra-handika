const tinggi = 10; // jumlah baris (tinggi area animasi)
let baris = 0;

function animasi() {
  console.clear();

  for (let i = 0; i < tinggi; i++) {
    console.log(i === baris ? '0' : '');
  }

  baris++;
  if (baris >= tinggi) {
    baris = 0; // sudah sampai bawah, ulangi lagi dari atas
  }

  setTimeout(animasi, 200);
}

animasi();