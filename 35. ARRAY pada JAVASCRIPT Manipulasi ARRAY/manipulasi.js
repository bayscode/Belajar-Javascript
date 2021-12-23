// Manipulasi Array

// 1. Menambah isi array
//  var myArr = [1,'teks',true];
//  console.log(myArr);

// var myArr1 = [];
// myArr1[0] = 'Muhamad';
// myArr1[1] = 'Iqbal';
// console.log(myArr1[1]);

// 2. Menghapus isi array
// var myArr = ['Muhamad', 'Iqbal', 'Aditya', 'Putra'];
// myArr[2] = undefined;

// console.log(myArr);

// 3. Menampilkan isi array
var myArr = ['Muhamad', 'Iqbal', 'Aditya', 'Putra', 13, 'Januari', 2000];
for (var i = 0; i < myArr.length; i++) {
  console.log('Mahasiswa ke- ' + i + ' : ' + myArr[i]);
}