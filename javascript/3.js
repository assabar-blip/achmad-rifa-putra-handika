const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan kalimat: ', (kalimat) => {
  const jumlahKarakter = kalimat.length;
  console.log(`Jumlah karakter dalam kalimat tersebut: ${jumlahKarakter}`);
  readline.close();
});