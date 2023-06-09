const arrayNames = ["Shyam", "Anil", "Shubhu", "Jenny", "Bittu", "Kittuu"];

arrayNames.sort(); // Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse(); // Reverse array that is in ascending order
console.log(arrayNames);

const array = [23, 9, 204, 4,  0, 66, 106 ];
array.sort( (n1, n2) => {
   return n1 > n2 ? 1 : -1 ;
} );
console.log(array);
array.reverse()
console.log(array);