document.addEventListener('DOMContentLoaded', () => {
    const payrollForm = document.getElementById('payrollForm');
    const payrollTableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];

    let payrollData = [];

    // Load data from local storage
    let storedData = localStorage.getItem('payrollData');
    if (storedData) {
        payrollData = JSON.parse(storedData);
        renderTable(payrollData);
    }

    payrollForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const employeeName = document.getElementById('employeeName').value;
        const employeeId = document.getElementById('employeeId').value;
        const basicSalary = document.getElementById('basicSalary').value;
        const allowances = document.getElementById('allowances').value;
        const deductions = document.getElementById('deductions').value;
        const netSalary = document.getElementById('netSalary').value;

        // Create new row
        const newRow = {
            employeeName,
            employeeId,
            basicSalary,
            allowances,
            deductions,
            netSalary
        };

        // Add the row to local storage
        payrollData.push(newRow);
        localStorage.setItem('payrollData', JSON.stringify(payrollData));

        // Clear form
        payrollForm.reset();

        // Render the table
        renderTable(payrollData);
    });

    function renderTable(data) {
        payrollTableBody.innerHTML = '';
        data.forEach((row) => {
            const newRow = payrollTableBody.insertRow();
            newRow.innerHTML = `
                <td>${row.employeeName}</td>
                <td>${row.employeeId}</td>
                <td>${row.basicSalary}</td>
                <td>${row.allowances}</td>
                <td>${row.deductions}</td>
                <td>${row.netSalary}</td>
                <td>
                    <button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
                </td>
            `;
            newRow.querySelector('.delete-btn').addEventListener('click', function () {
                const index = data.indexOf(row);
                data.splice(index, 1);
                localStorage.setItem('payrollData', JSON.stringify(data));
                renderTable(data);
            });
        });
    }
});