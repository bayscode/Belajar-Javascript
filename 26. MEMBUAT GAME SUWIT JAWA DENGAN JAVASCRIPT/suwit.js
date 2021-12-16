// Algoritma Game suwit jawa (pseudo code)
// 1. Menangkap pilihan player
var u = true;
// Perulangan while
while (u) {
  var p = prompt('pilih : batu, gunting, kertas.');

  // 2. Menangkap pilihan komputer
  // Membangkitkan(mengenerate) bilangan random
  var k = Math.random();
  if (k < 0.34) {
    k = 'batu';
  } else if (k >= 0.34 && k < 0.67) {
    k = 'gunting';
  } else {
    k = 'kertas';
  }

  // 3. Menentukan rules
  var hasil = '';
  if (p === k) {
    hasil = 'SERI!';
  } else if (p === 'batu') {
    // if (k === 'gunting') {
    //   hasil = 'MENANG!';
    // } else {
    //   hasil = 'KALAH!';
    // }
    hasil = (k === 'gunting') ? 'MENANG!' : 'KALAH!';
  } else if (p === 'gunting') {
    hasil = (k === 'batu') ? 'KALAH!' : 'MENANG!';
  } else if (p === 'kertas') {
    hasil = (k === 'gunting') ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukkan pilihan yang salah!';
  }

  // 4. Tampilkan hasilnya
  alert('Kamu memilih: ' + p + ' dan komputer memilih ' + k + '\nMaka hasilnya adalah kamu ' + hasil);
  u = confirm('mau main lagi?');
}
alert('terima kasih!');