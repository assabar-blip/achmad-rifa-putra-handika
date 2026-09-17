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
      mintaInput();
    });
  } else {
    let jumlahGanjil = 0;
    for (let i = 0; i < angkaArray.length; i++) {
      if (angkaArray[i] % 2 !== 0) {
        jumlahGanjil++;
      }
    }
    console.log('Angka yang dimasukkan: ' + angkaArray.join(', '));
    console.log('Jumlah bilangan ganjil: ' + jumlahGanjil);
    readline.close();
  }
}

mintaInput();