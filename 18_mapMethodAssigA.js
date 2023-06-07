console.log(
  "1]================== +10 elements ======================================"
);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
const arraytransformed = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(arraytransformed);

console.log(
  "2]================== Square of elements ======================================"
);
const arrsquare = arrayNumbers.map((element) => {
  return element * element;
});
console.log(arrsquare);
console.log(
  "3]================== Addition of index value in the elements ======================================"
);
const arrayAdd = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(arrayAdd);
