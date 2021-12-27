// Constructor Function
function Halo() {
  console.log(this);
  console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// This mengembalikkan object yang baru dibuat