const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrima(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

readline.question('Masukkan angka awal: ', (awal) => {
  readline.question('Masukkan angka akhir: ', (akhir) => {
    const nAwal = parseInt(awal);
    const nAkhir = parseInt(akhir);
    let daftarPrima = [];
    let jumlahPrima = 0;

    for (let angka = nAwal; angka <= nAkhir; angka++) {
      if (isPrima(angka)) {
        daftarPrima.push(angka);
        jumlahPrima++;
      }
    }

    console.log('Daftar bilangan prima: ' + daftarPrima.join(', '));
    console.log('Jumlah total bilangan prima: ' + jumlahPrima);
    readline.close();
  });
});