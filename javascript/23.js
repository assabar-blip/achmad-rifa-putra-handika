const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan nilai maksimum: ', (input) => {
  const maks = parseInt(input);
  let a = 0, b = 1;
  let hasil = [];

  while (a <= maks) {
    hasil.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }

  console.log(hasil.join(', '));
  readline.close();
});