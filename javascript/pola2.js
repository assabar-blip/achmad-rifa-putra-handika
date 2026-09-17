const totalBaris = 6;

for (let i = 1; i <= totalBaris; i++) {
  const jumlahBintang = 2 * i - 1;
  const jumlahSpasi = totalBaris - i;
  console.log(' '.repeat(jumlahSpasi) + '*'.repeat(jumlahBintang));
}