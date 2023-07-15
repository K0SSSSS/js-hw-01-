const salary = Number(prompt("Введіть суму вашої зарплати"))
console.log("Cума вашої зарплати: " + salary);
const premium = salary * 0.15
console.log("Ваша премія: " + premium);
const wholeSum = salary + premium
const taxes = wholeSum * 0.1
console.log("Податки, які необхідно сплатити: " + taxes);
const shop = 190
console.log("Витрати в магазині: " + shop);
const lastBalance = salary + premium - taxes - shop
alert("Сума, що залишилась: " + lastBalance)