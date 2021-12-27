// Function Declaration
function buatObjectMahasiswa(nama, npm, jurusan, email) {
  var mhs = {};
  mhs.nama = nama;
  mhs.npm = npm;
  mhs.jurusan = jurusan;
  mhs.email = email;

  return mhs;
}

// Cara isi objectnya
var mahasiwa = buatObjectMahasiswa('Muhamad Iqbal Aditya Putra', '021190035', 'Sistem Informasi', 'muhamadiqbaladityaputra@gmail.com');