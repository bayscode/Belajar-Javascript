function perkalianDuaBilangan(a, b) {
  return a * b;
}

function pertambahanDuaBilangan(a, b) {
  return a + b;
}

var total = perkalianDuaBilangan(pertambahanDuaBilangan(32432, 32), (pertambahanDuaBilangan(243, 3476)));
console.log(total);