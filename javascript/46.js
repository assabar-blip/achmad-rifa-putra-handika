const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan angka awal: ', (awal) => {
  readline.question('Masukkan angka akhir: ', (akhir) => {
    const nAwal = parseInt(awal);
    const nAkhir = parseInt(akhir);
    let total = 0;

    for (let angka = nAwal; angka <= nAkhir; angka++) {
      total += angka;
    }

    console.log(`Total bilangan dari ${nAwal} sampai ${nAkhir}: ${total}`);
    readline.close();
  });
});