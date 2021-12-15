var aB = 6, //aB : angkotBeroperasi = 6;
  jA = 10; //jA : jumlahAngkot = 10;
// For
// nA : noAngkot = 1;
// Perulangan x10
// ++: x = x + 1;
for (var nA = 1; nA <= jA; nA++) {
  // Kondisi 1
  if (nA <= aB && nA !== 5) {
    // Mencetak Angkot No 1, 2, 3, 4, 6 beroperasi dengan baik.
    console.log('Angkot No. ' + nA + ' beroperasi dengan baik.'); //aksi(ekspresi)
    // Kondisi 2
  } else if (nA === 8 || nA === 10 || nA === 5) {
    // Mencetak Angkot No. 5, 8, 10 sedang lembur.
    console.log('Angkot No. ' + nA + ' sedang lembur.'); //aksi(ekspresi)
  } else {
    // Mencetak Angkot No.7. 9 sedang tidak beroperasi.
    console.log('Angkot No. ' + nA + ' sedang tidak beroperasi.'); //aksi(ekspresi)
  }
  
}