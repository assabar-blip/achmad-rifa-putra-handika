const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan angka awal: ', (awal) => {
  readline.question('Masukkan angka akhir: ', (akhir) => {
    const nAwal = parseInt(awal);
    const nAkhir = parseInt(akhir);
    let hasil = [];

    for (let angka = nAwal; angka <= nAkhir; angka++) {
      if (angka % 6 === 0) {
        hasil.push(angka);
      }
    }

    console.log(hasil.join(', '));
    readline.close();
  });
});