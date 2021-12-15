// Aplikasi Juragan Angkot
var noAngkot = 1,
  angkotBeroperasi = 6,
  jmlAngkot = 10;

// For
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) { 
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}