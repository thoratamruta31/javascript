console.log("_________________________");
let arrow = () => {
  console.log(`1}     Arrow function with no argument and no return value => `);
  console.log("       Good Morning, Today is Monday.");
};
arrow();
console.log("_________________________");
let array1 = (n1, n2, n3 = 1) => {
  let multiply = n1 * n2 * n3;
  console.log(
    `      Given inputs are => "${n1}","${n2}","${n3}" and It's multiplication is => "${multiply}"`
  );
};
console.log("2} a} ");
array1(5, 5, 2);
console.log(
  "---------------------------------------------------------------------------"
);
console.log("   b} ");
array1(10, 4);
console.log("__________________________________________________");
let array2 = (a1, a2, a3, a4, a5 = 1) => {
  let addition = a1 + a2 + a3 + a4 + a5;
  console.log(
    `      Given inputs are => "${a1}","${a2}","${a3},"${a4},"${a5}" and It's Addition is => "${addition}"`
  );
};
console.log("3} a}");
array2(100, 100, 200, 349, 756);
console.log(
  "-------------------------------------------------------------------------"
);
console.log("   c}");
array2(" I am ", " learning ", " ES6 ", " features ", " in depth ");
console.log("__________________________________________________");
