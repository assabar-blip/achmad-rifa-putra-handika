const totalBaris = 6;
for (let i = 1; i <= totalBaris; i++) {
  const bintang = 11 - 2 * (i - 1);
  const spasi = i - 1;
  console.log(' '.repeat(spasi) + '*'.repeat(bintang));
}