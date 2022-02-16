document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = document.getElementById('food-cost')
    const foodPrice = parseFloat(foodCost.value)
    const rentCost = document.getElementById('rent-cost')
    const rentPrice = parseFloat(rentCost.value)
    const clothesCost = document.getElementById('clothes-cost')
    const clothesPrice = parseFloat(clothesCost.value)

    const totalExpense = document.getElementById('total-expense')
    if (isNaN(foodPrice) || foodPrice < 0) {
        return alert('please input valid amount of money in number format')
    }
    else {
        const newExpenseTotal = foodPrice + rentPrice + clothesPrice
        totalExpense.innerText = newExpenseTotal
        // get total balance
        const incomeMoney = document.getElementById('income')
        const income = parseFloat(incomeMoney.value)
        const totalBalance = document.getElementById('balance')
        totalBalance.innerText = income - newExpenseTotal
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input')
    const saveMoney = parseFloat(saveInput.value)
    const incomeMoney = document.getElementById('income')
    const income = parseFloat(incomeMoney.value)
})
