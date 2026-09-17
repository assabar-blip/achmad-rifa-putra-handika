// soal35.js
const lebar = 20;
let posisi = 0;
let arah = 1; // 1 = ke kanan, -1 = ke kiri

function animasi() {
  console.clear();
  console.log(' '.repeat(posisi) + '0');

  posisi += arah;

  if (posisi >= lebar - 1 || posisi <= 0) {
    arah *= -1; // balik arah kalau sudah mentok
  }

  setTimeout(animasi, 100);
}
animasi();