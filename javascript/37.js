const lebar = 20;
const baseline = 5;
let posisi = 0;
let arah = 1; // 1 = ke kanan, -1 = ke kiri

function animasi() {
  console.clear();

  for (let i = 0; i < baseline; i++) {
    console.log('');
  }

  console.log(' '.repeat(posisi) + '0');

  posisi += arah;

  if (posisi >= lebar - 1 || posisi <= 0) {
    arah *= -1; // balik arah kalau sudah mentok kiri atau kanan
  }

  setTimeout(animasi, 100);
}

animasi();