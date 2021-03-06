// Function Tambah Penumpang
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //Jika Angkot Kosong
  if (penumpang.length == 0) {
    // Tambah Penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array dan keluar dari function
    return penumpang;
    // Selain
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' sudah ada didalam angkot.');
        // Kembalikkan isi array dan keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikkan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
}

// Function Hapus Penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot Kosong
  if (penumpang.length == 0) {
    // Tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
    console.log('Angkot masih kosong!');
    // Kembalikan isi array dan keluar dari return 
    return penumpang;
  }
  // Selain
  else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika penumpang sesuai hapus penumpang dengan mengubah namanya, menjadi Undefined
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        // Kembalikan isi array dan keluar dari return
        return penumpang;
      }
      // Jika tidak ada nama yang sesuai
      else if (i == penumpang.length - 1) {
        // Tampilkan pesan kesalahannya
        console.log(namaPenumpang + ' tidak ada didalam angkot!');
      }
      // Kembalikan isi array dan keluar dari return
      return penumpang;
    }
  }
}