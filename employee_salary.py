# Employee Salary Calculator

name = input("Enter employee name: ")
basic_salary = float(input("Enter basic salary: "))
hra = float(input("Enter HRA: "))
da = float(input("Enter DA: "))
tax_percent = float(input("Enter tax percentage: "))

gross_salary = basic_salary + hra + da
tax_amount = gross_salary * (tax_percent / 100)
net_salary = gross_salary - tax_amount

print("\nEmployee Salary Details")
print("-" * 32)
print(f"Employee: {name}")
print(f"Basic Salary: ₹{basic_salary:.2f}")
print(f"HRA: ₹{hra:.2f}")
print(f"DA: ₹{da:.2f}")
print(f"Gross Salary: ₹{gross_salary:.2f}")
print(f"Tax Amount: ₹{tax_amount:.2f}")
print(f"Net Salary: ₹{net_salary:.2f}")
