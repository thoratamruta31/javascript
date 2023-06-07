




console.log("1] ======================== Log on console elements with its index =========================================");
const arrayNumbers = [1, -7,40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((element, index) => {
    console.log("Elements:", element,"Index:", index);
});

console.log("2] ======================== Positive Numbers =========================================");
const arrayPositiveNums = [];
arrayNumbers.forEach(element => {
    if (element>0) {
        arrayPositiveNums.push(element);
        
    }
});
console.log(arrayPositiveNums);

console.log("3] ======================== negative Numbers =========================================");
const arrayNegativeNums = [];
arrayNumbers.forEach(element => {
    if (element<0) {
        arrayNegativeNums.push(element);
        
    }
});
console.log(arrayNegativeNums);

console.log("4] ======================== Even Numbers =========================================");
const evenNums = []
arrayNumbers.forEach(element => {
    if(element%2 == 0) {
        evenNums.push(element);
    } 
});
console.log(evenNums);
console.log("5] ======================== Sum of all elements =========================================");
let sumOfElement = 0;
arrayNumbers.forEach(element => {
    sumOfElement = sumOfElement + element;
});
console.log(sumOfElement);

console.log("6] ======================== Even indexed element =========================================");
const evenIndexed = []
arrayNumbers.forEach((element,index) => {
    if (index%2 == 0) {
        evenIndexed.push(element);
    }
});
console.log(evenIndexed);
