function tampilAngka(n) {
  // Base Case
  if (n === 0) return;
  console.log(n);
  return tampilAngka(n - 1);
}
tampilAngka(10);