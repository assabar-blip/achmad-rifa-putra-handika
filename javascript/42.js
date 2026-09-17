const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let angkaArray = [];
let jumlahInput = 10;
let counter = 0;

function mintaInput() {
  if (counter < jumlahInput) {
    readline.question(`Masukkan angka ke-${counter + 1}: `, (input) => {
      angkaArray.push(parseInt(input));
      counter++;
      mintaInput(); // panggil lagi fungsi ini untuk minta input berikutnya
    });
  } else {
    // semua input sudah selesai, cari yang terbesar
    let terbesar = angkaArray[0];
    for (let i = 1; i < angkaArray.length; i++) {
      if (angkaArray[i] > terbesar) {
        terbesar = angkaArray[i];
      }
    }
    console.log('Angka yang dimasukkan: ' + angkaArray.join(', '));
    console.log('Bilangan terbesar: ' + terbesar);
    readline.close();
  }
}

mintaInput();