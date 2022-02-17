// common function for calling parameter
function getInputValue(inputId) {
    const allGoodsCost = document.getElementById(inputId)
    const allGoodsPrice = parseFloat(allGoodsCost.value)
    return allGoodsPrice
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodPrice = getInputValue('food-cost')
    const rentPrice = getInputValue('rent-cost')
    const clothesPrice = getInputValue('clothes-cost')
    const income = getInputValue('income')
    const totalExpense = document.getElementById('total-expense')
    // error handling ///
    if (isNaN(foodPrice) || foodPrice < 0) {
        return alert('please input valid amount of money in number format in food-cost')
    }
    else if (isNaN(rentPrice) || rentPrice < 0) {
        return alert('please input valid amount of money in number format in rent-cost')
    }
    else if (isNaN(clothesPrice) || clothesPrice < 0) {
        return alert('please input valid amount of money in number format clothes-cost')
    }
    else if (isNaN(income) || income < 0) {
        return alert('please input valid amount of money in number format income')
    }
    else {
        // get total expense value
        const newExpenseTotal = foodPrice + rentPrice + clothesPrice
        totalExpense.innerText = newExpenseTotal
        const totalExpenseNumber = parseFloat(totalExpense.innerText)
        if (totalExpenseNumber > income) {
            return alert('you have not enough money to expense')
        }
        else {
            // get total balance
            const totalBalance = document.getElementById('balance')
            totalBalance.innerText = income - newExpenseTotal
        }
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveMoney = getInputValue('save-input')
    const income = getInputValue('income')
    const totalBalance = document.getElementById('balance')
    const totalAmount = parseFloat(totalBalance.innerText)
    // error handling for bonus mark
    if (isNaN(saveMoney) || saveMoney < 0) {
        return alert('please input valid amount of money in number format in save-input')
    }
    else {
        // get save money for percentage
        const savingAmount = document.getElementById('saving-amount')
        savingAmount.innerText = (income * saveMoney) / 100
        // get remainig balance
        const savingAmountNumber = parseFloat(savingAmount.innerText)
        // error handling for bonus mark
        if (savingAmountNumber > totalAmount) {
            return alert('you have not enough money to save')
        }
        else {
            const remainingBalance = document.getElementById('remaining-balance')
            remainingBalance.innerText = totalAmount - savingAmountNumber
        }
    }
})

