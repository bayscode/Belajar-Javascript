function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

var tampil = tambah(3, 4, 5, 4);
console.log(tampil);