const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan kalimat: ', (kalimat) => {
  readline.question('Huruf yang dicari: ', (huruf) => {
    let jumlah = 0;
    for (let i = 0; i < kalimat.length; i++) {
      if (kalimat[i].toLowerCase() === huruf.toLowerCase()) {
        jumlah++;
      }
    }
    console.log(`Huruf "${huruf}" muncul sebanyak ${jumlah} kali`);
    readline.close();
  });
});