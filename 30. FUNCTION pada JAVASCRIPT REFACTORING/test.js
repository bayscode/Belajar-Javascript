function volumeDuaKubus(a,b){
  var volumeA;
  var volumeB;
  var total;
  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;
  return total;
}

console.log(volumeDuaKubus(4,5));