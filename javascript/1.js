const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Masukkan kalimat: ', (kalimat) => {
  const terbalik = kalimat.split('').reverse().join('');
  console.log('Hasil terbalik: ' + terbalik);
  readline.close();
});