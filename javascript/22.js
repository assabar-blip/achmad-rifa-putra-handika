const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan angka: ', (input) => {
  const n = parseInt(input);
  let hasil = 1;
  let langkah = [];

  for (let i = n; i >= 1; i--) {
    hasil *= i;
    langkah.push(i);
  }

  console.log(`${n}! = ${langkah.join(' x ')} = ${hasil}`);
  readline.close();
});