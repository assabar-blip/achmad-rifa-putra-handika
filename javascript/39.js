const tinggi = 10;
let baris = 0;
let arah = 1; // 1 = turun, -1 = naik

function animasi() {
  console.clear();

  for (let i = 0; i < tinggi; i++) {
    console.log(i === baris ? '0' : '');
  }

  baris += arah;

  if (baris >= tinggi - 1 || baris <= 0) {
    arah *= -1; // balik arah kalau sudah mentok atas atau bawah
  }

  setTimeout(animasi, 200);
}

animasi();