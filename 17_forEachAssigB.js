class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 50000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(
  "1]=========================== TCS employees=============================="
);
array_employees.forEach((employee) => {
  if (employee.emp_company == "TCS") {
    console.log(
      "Employee name:",
      employee.emp_name,
      ",Compony name:",
      employee.emp_company
    );
  }
});
console.log(
  "2]=========================== Employees those salary is greater than 50000 =============================="
);
array_employees.forEach((employee) => {
  if (employee.emp_salary >= 50000) {
    console.log(employee);
  }
});
console.log(
  "3]=========================== Sum of all employees salary =============================="
);
let sumOfSalary = 0;
array_employees.forEach((employee) => {
  sumOfSalary = sumOfSalary + employee.emp_salary;
});
console.log(sumOfSalary);

console.log(
  "4]=========================== Average salary of employees =============================="
);
let averageSalary = sumOfSalary / array_employees.length;
console.log("Average salary is:", averageSalary);

console.log(
  "5]=========================== IT & HR employees with salary greater than or equal to 75000 =============================="
);
array_employees.forEach((employee) => {
  if (employee.emp_company == "HR" || "IT")
    if (employee.emp_salary >= 75000) console.log(employee);
});
