const totalBaris = 6;
const lebarTotal = 11;

for (let baris = 1; baris <= totalBaris; baris++) {
  if (baris === totalBaris) {
    console.log('*'.repeat(lebarTotal));
  } else {
    const jumlahBintang = baris;
    const spasiTengah = lebarTotal - (jumlahBintang * 2);
    console.log('*'.repeat(jumlahBintang) + ' '.repeat(spasiTengah) + '*'.repeat(jumlahBintang));
  }
}