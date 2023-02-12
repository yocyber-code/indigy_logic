for (let i = 1; i < 10; i++) {
  let row = "";
  for (let j = 1; j <= 9 - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += " ";
    row += i;
  }
  console.log(row);
}