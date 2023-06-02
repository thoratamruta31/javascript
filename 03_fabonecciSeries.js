console.log("==================Fabonecci Series==========================");
const num = 100;
(n1 = 0), (n2 = 1), (nextNo = n1 + n2);

while (nextNo <= num) {
  // print the next term
  console.log(nextNo);

  n1 = n2;
  n2 = nextNo;
  nextNo = n1 + n2;
}
