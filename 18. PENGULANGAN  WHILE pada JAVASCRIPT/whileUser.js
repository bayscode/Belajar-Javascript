// Program yang dihentikan oleh user
var u = true;
while (u === true) {
  console.log('Terus ulang');
  u = confirm('Lagi?');
}