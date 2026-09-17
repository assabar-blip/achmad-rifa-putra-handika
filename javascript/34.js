const lebar = 20; // panjang baris (jumlah kolom)
let posisi = 0;
let arah = 1; // animasi akan berjalan berulang ke kanan

function animasi() {
  console.clear();
  console.log(' '.repeat(posisi) + '0');

  posisi += arah;

  if (posisi >= lebar - 1) {
    posisi = 0; // kalau sudah sampai kanan, ulangi dari kiri lagi
  }

  setTimeout(animasi, 100); // jeda 100ms tiap langkah
}

animasi();