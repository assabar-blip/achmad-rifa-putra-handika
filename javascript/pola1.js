const totalBaris = 6;
const lebarTotal = 11; // panjang baris pertama

for (let baris = 0; baris < totalBaris; baris++) {
  if (baris === 0) {
    console.log('*'.repeat(lebarTotal));
  } else {
    const jumlahBintang = 5 - baris + 1; // jumlah bintang di tiap sisi
    const spasiTengah = lebarTotal - (jumlahBintang * 2);
    console.log('*'.repeat(jumlahBintang) + ' '.repeat(spasiTengah) + '*'.repeat(jumlahBintang));
  }
}