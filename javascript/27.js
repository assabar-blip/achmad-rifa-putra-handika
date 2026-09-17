const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan tahun awal: ', (awal) => {
  readline.question('Masukkan tahun akhir: ', (akhir) => {
    const nAwal = parseInt(awal);
    const nAkhir = parseInt(akhir);
    let hasil = [];

    for (let tahun = nAwal; tahun <= nAkhir; tahun++) {
      const isKabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
      const angkaTerakhir = tahun % 10;
      if (isKabisat && angkaTerakhir === 6) {
        hasil.push(tahun);
      }
    }

    console.log(hasil.join(', '));
    readline.close();
  });
});