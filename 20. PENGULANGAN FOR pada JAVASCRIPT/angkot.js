// Variabel
var noAngkot = 1,
  jmlAngkot = 10,
  angkotBeroperasi = 6;

// While
while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' sedang beroperasi dengan baik.');
  noAngkot++;
  // noAngkot = noAngkot + 1;
}
// For
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi dengan baik.');
}