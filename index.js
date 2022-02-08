// Write your solution in this file!
const employee = {
 name: "Sam",
 streetAddress: "8 lane",
};
employee;

function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    console.log("these are my arguments", employee, name, Sam)
    const updateEmployee = {...employee };

    console.log("copy of employee", updateEmployee);

    updateEmployee[employee] = 'Sam';

    return updateEmployee;
}
// understand how many parameters
// create function body and console log par..
// what is expected to be returned...?