// Foreach

// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
var mhs = ['Muhamad', 'Iqbal', 'Aditya', 'Putra'];
mhs.forEach(function (e, i) {
  console.log('Mahasiswa ke- ' + (i + 1) + ' adalah ' + ': ' + e);
});
// var cetak = function(e){
//   console.log(e); 
// }

var angka = [1, 2, 3, 4, 5, 6, 7, 8];
angka.forEach(function (e) { // functioen expression
  console.log(e);
});