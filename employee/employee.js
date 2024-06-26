let employees = [];

function addData() {
    // Get input values
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let division = document.getElementById("divisionInput").value;
    let position = document.getElementById("positionInput").value;

    // Create a new employee object
    let employee = {
        name: name,
        email: email,
        division: division,
        position: position
    };

    // Add the employee to the array
    employees.push(employee);

    // Save the data to local storage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Clear input fields
    clearInputs();

    // Update the table
    updateTable();
}

function updateTable() {
    let table = document.getElementById("outputTable");
    table.innerHTML = "";

    // Loop through the employees array and create a new row for each employee
    employees.forEach((employee, index) => {
        let newRow = table.insertRow(table.rows.length);

        newRow.insertCell(0).innerHTML = employee.name;
        newRow.insertCell(1).innerHTML = employee.email;
        newRow.insertCell(2).innerHTML = employee.division;
        newRow.insertCell(3).innerHTML = employee.position;
        newRow.insertCell(4).innerHTML =
            '<button onclick="editData(this, ' + index + ')">Edit</button>' +
            '<button onclick="deleteData(this, ' + index + ')">Delete</button>';
    });
}

function editData(button, index) {
    // Get the employee object from the array
    let employee = employees[index];

    // Prompt the user to enter updated values
    let nameInput = prompt("Enter the updated name:", employee.name);
    let emailInput = prompt("Enter the updated email:", employee.email);
    let divisionInput = prompt("Enter the updated division:", employee.division);
    let positionInput = prompt("Enter the updated position:", employee.position);

    // Update the employee object
    employee.name = nameInput;
    employee.email = emailInput;
    employee.division = divisionInput;
    employee.position = positionInput;

    // Save the updated data to local storage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Update the table
    updateTable();
}

function deleteData(button, index) {
    // Remove the employee from the array
    employees.splice(index, 1);

    // Save the updated data to local storage
    localStorage.setItem('employees', JSON.stringify(employees));

    // Update the table
    updateTable();
}

function clearInputs() {
    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("divisionInput").value = "";
    document.getElementById("positionInput").value = "";
}

// Load the data from local storage when the page loads
window.onload = function() {
    let storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
        updateTable();
    }
};