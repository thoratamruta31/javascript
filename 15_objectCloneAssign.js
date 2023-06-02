console.log(
  "1] =========================== Shallow clone ==================================================="
);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const clonedArray = arrayNums;
console.log("Original Array:", arrayNums);
console.log("Cloned Array:", clonedArray);
console.log(
  "===============Update cloned array=============================================================="
);
clonedArray.push(55, 66);
console.log("Original array after updation:", arrayNums);
console.log("Cloned Array after updation:", clonedArray);

console.log(
  "2] ============= deep clone===================================================================="
);
const newArray = [...arrayNums];
arrayNums.push(10, 25);
console.log("Deep cloned Array after updating original array:", newArray);
console.log("Original Array after updation:", arrayNums);

console.log(
  "3] =============== Merge or concat array======================================================="
);
const arrayEven = [2, 30, 14, 8];
const concatArray = [...arrayNums, ...arrayEven];
console.log("Concated Array:", concatArray);

console.log(
  "4] ============= Employee Info================================================================="
);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "Om vrindavan Society",
      street: "Kanch pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91 - 9096 5678 77"],
};
console.log(
  "5] ============================== Employee details ==========================================="
);
console.log("a.Address:", employee_info.address);
console.table(employee_info.address);
console.log("b. Mobile Numbers:", employee_info.mobiles);

console.log(
  "6] ============ Perform deep copy using JSON.stringfy ========================================"
);
const deepClonedInfo = JSON.parse(JSON.stringify(employee_info));

employee_info.salary.july_month = "80,0000INR";
console.log(
  "a. Updated salary for July month:",
  employee_info.salary.july_month
);

employee_info.address.country = "United Kindom";
console.log("Updated country:", employee_info.address.country);

console.log(
  "c. -------------- Original and Cloned object---------------------------------------------------"
);
console.log(
  "Original salary----------------------------------------------------------"
);
console.table(deepClonedInfo.salary);
console.log(
  "Updated salary-----------------------------------------------------------"
);
console.table(employee_info.salary);

console.log(
  "Original Address--------------------------------------------------------"
);
console.table(deepClonedInfo.address);
console.log(
  "Updated Address---------------------------------------------------------"
);
console.table(employee_info.address);
