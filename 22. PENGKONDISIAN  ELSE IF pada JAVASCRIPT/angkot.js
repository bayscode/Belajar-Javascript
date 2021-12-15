var angkotBeroperasi = 6,
  jmlAngkot = 10;
// For
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    // Mencetak Angkot 1 - 6 beroperasi dengan baik.
    console.log('Angkot ' + noAngkot + ' beroperasi dengan baik.');
  } else if (noAngkot === 8) {
    // Mencetak Angkot 8 sedang lembur.
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    // Mencetak Angkot 7,9,10 sedang tidak beroperasi.
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}