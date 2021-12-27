// Constructor Function
// Nama function diusahakan diawali huruf Uppercase

function Mahasiswa(nama, npm, jurusan, email) {
  // var this = {};
  this.nama = nama;
  this.npm = npm;
  this.jurusan = jurusan;
  this.email = email;
  // return this;
}

// Cara manggil objectnya
var mahasiswa = new Mahasiswa('Muhamad Iqbal Aditya Putra', '021190035', 'Sistem Informasi', 'muhamadiqbaladityaputra@gmail.com');