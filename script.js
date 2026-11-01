document.addEventListener('DOMContentLoaded', () => {
    const salaryForm = document.getElementById('salary-form');

    if (salaryForm) {
        salaryForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const employeeName = document.getElementById('employeeName').value.trim() || 'Employee';
            const basicSalary = parseFloat(document.getElementById('basicSalary').value) || 0;
            const hra = parseFloat(document.getElementById('hra').value) || 0;
            const da = parseFloat(document.getElementById('da').value) || 0;
            const taxPercent = parseFloat(document.getElementById('taxPercent').value) || 0;

            const grossSalary = basicSalary + hra + da;
            const taxAmount = grossSalary * (taxPercent / 100);
            const netSalary = grossSalary - taxAmount;

            const output = document.getElementById('salaryOutput');
            output.innerHTML = `
                >>> Employee Salary Details<br>
                >>> -------------------------------<br>
                >>> Employee: ${employeeName}<br>
                >>> Basic Salary: ₹${basicSalary.toFixed(2)}<br>
                >>> HRA: ₹${hra.toFixed(2)}<br>
                >>> DA: ₹${da.toFixed(2)}<br>
                >>> Gross Salary: ₹${grossSalary.toFixed(2)}<br>
                >>> Tax Amount: ₹${taxAmount.toFixed(2)}<br>
                >>> Net Salary: ₹${netSalary.toFixed(2)}
            `;
        });
    }
});
