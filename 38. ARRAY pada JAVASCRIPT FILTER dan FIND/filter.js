// Filter
var angka = [1, 5, 3, 7, 2, 8, 4, 10];
angka2.sort(function (a, b) {
  return a - b;
});

angka2 = angka.filter(function (x) {
  return x > 5;
});
console.log(angka2.join(' '));