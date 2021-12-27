// Object Literal
var obj = {
  a: 20,
  nama: 'Muhamad Iqbal Aditya Putra'
}

obj.halo = function () {
  console.log(this);
  console.log('halo!');
}

obj.halo();
// This mengembalikkan object yang bersangkutan