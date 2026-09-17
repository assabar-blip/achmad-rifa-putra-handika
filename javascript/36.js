const lebar = 20;      // panjang baris (jarak gerak)
const baseline = 5;    // jumlah baris kosong di atas, biar posisi "bawah"
let posisi = 0;

function animasi() {
  console.clear();

  // cetak baris kosong dulu, mendorong angka 0 ke bagian bawah layar
  for (let i = 0; i < baseline; i++) {
    console.log('');
  }

  // baris utama: angka 0 bergerak ke kanan
  console.log(' '.repeat(posisi) + '0');

  posisi++;
  if (posisi >= lebar) {
    posisi = 0; // langsung muncul lagi dari kiri (efek LED wrap-around)
  }

  setTimeout(animasi, 100);
}

animasi();