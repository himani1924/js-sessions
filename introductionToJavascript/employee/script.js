// create a list of objects of Employee with info as follow :
// Name, age, salary ,DOB
let employees = [
    { name: 'Neha', age:19, salary: 40000, dob: 'Nov 4 2005' },
    { name: 'Raj', age:21, salary: 5000, dob: 'Jan 23 2004' },
    { name: 'Priya', age:21, salary: 600, dob: 'Feb 15 2003' },
    { name: 'Nisha', age:21, salary: 4500, dob: 'Mar 10 2003' },
    { name: 'Shahil', age:22, salary: 55000, dob: 'Apr 25 2002' },
    { name: 'Ankit', age:24, salary: 65000, dob: 'May 15 2001' },
    { name: 'Ashutosh', age:24, salary: 800, dob: 'Jun 20 2000' }
]

// filter all employees with salary greater than 5000
let filtered_employees = employees.filter(employee => employee.salary > 5000);
console.log("Filtered employees with salary more than 5000: ");
console.log(filtered_employees);

// group employee on the basis of their age

const grouped_employees = (employees)=>{
    // group is object of list of objects(employees)
    const group = {}
    employees.forEach(employee =>{
        if(!group[employee.age]){
            group[employee.age] =[]
        }
        group[employee.age].push(employee)
    })
    return group
}

const grouped_emp = grouped_employees(employees)
console.log("Grouped employees based on their age: ");
console.log(grouped_emp);

// fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.

let increment_employees = employees.filter(employee => employee.salary<1000 && employee.age>20);
increment_employees.forEach(employee => employee.salary += 5*employee.salary)
console.log("Employees with 5 times incremented salary: ");
console.log(increment_employees);