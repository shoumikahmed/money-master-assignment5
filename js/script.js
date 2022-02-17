// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const foodCost = document.getElementById('food-cost')
//     const foodPrice = parseFloat(foodCost.value)
//     const rentCost = document.getElementById('rent-cost')
//     const rentPrice = parseFloat(rentCost.value)
//     const clothesCost = document.getElementById('clothes-cost')
//     const clothesPrice = parseFloat(clothesCost.value)

//     const totalExpense = document.getElementById('total-expense')

//     const incomeMoney = document.getElementById('income')
//     const income = parseFloat(incomeMoney.value)
//     if (isNaN(foodPrice) || foodPrice < 0) {
//         return alert('please input valid amount of money in number format in food-cost')
//     }
//     else if (isNaN(rentPrice) || rentPrice < 0) {
//         return alert('please input valid amount of money in number format in rent-cost')
//     }
//     else if (isNaN(clothesPrice) || clothesPrice < 0) {
//         return alert('please input valid amount of money in number format clothes-cost')
//     }
//     else if (isNaN(income) || income < 0) {
//         return alert('please input valid amount of money in number format income')
//     }
//     else {
//         const newExpenseTotal = foodPrice + rentPrice + clothesPrice
//         totalExpense.innerText = newExpenseTotal
//         // get total balance

//         const totalBalance = document.getElementById('balance')
//         totalBalance.innerText = income - newExpenseTotal

//         // onClick()
//     }
// })

// document.getElementById('save-btn').addEventListener('click', function () {
//     const saveInput = document.getElementById('save-input')
//     const saveMoney = parseFloat(saveInput.value)
//     const incomeMoney = document.getElementById('income')
//     const income = parseFloat(incomeMoney.value)
//     // get save money per percentage



//     if (isNaN(saveMoney) || saveMoney < 0) {
//         return alert('please input valid amount of money in number format in save-input')
//     }
//     else {
//         const savingAmount = document.getElementById('saving-amount')
//         // const savingMoney = parseFloat(savingAmount.innerText)
//         const totalBalance = document.getElementById('balance')
//         // const totalMoney = parseFloat(totalBalance.innerText)

//         if (savingAmount > totalBalance) {
//             return alert('you have no money for saving')
//         }
//         else {
//             savingAmount.innerText = (income * saveMoney) / 100
//         }
//         const totalBalance = document.getElementById('balance')
//         // // get remainig balance
//         const remainingBalance = document.getElementById('remaining-balance')
//         remainingBalance.innerText = totalBalance.innerText - savingAmount.innerText

//     }

// })

// // function onClick() {
// //     const foodCost = document.getElementById('food-cost')
// //     foodCost.value = ''
// //     const rentCost = document.getElementById('rent-cost')
// //     rentCost.value = ''
// //     const clothesCost = document.getElementById('clothes-cost')
// //     clothesCost.value = ''
// //     const incomeMoney = document.getElementById('income')
// //     incomeMoney.value = ''
// //     // const saveInput = document.getElementById('save-input')
// //     // saveInput.value = ''
// // }








// const foodCost = document.getElementById('food-cost')
// const foodPrice = parseFloat(foodCost.value)

// const rentCost = document.getElementById('rent-cost')
// const rentPrice = parseFloat(rentCost.value)

// const clothesCost = document.getElementById('clothes-cost')
// const clothesPrice = parseFloat(clothesCost.value)

// const incomeMoney = document.getElementById('income')
// const income = parseFloat(incomeMoney.value)


//              2nd er jonnn ////

// const saveInput = document.getElementById('save-input')
// const saveMoney = parseFloat(saveInput.value)


// const incomeMoney = document.getElementById('income')
// const income = parseFloat(incomeMoney.value)


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
        const newExpenseTotal = foodPrice + rentPrice + clothesPrice
        totalExpense.innerText = newExpenseTotal
        // get total balance

        const totalBalance = document.getElementById('balance')
        totalBalance.innerText = income - newExpenseTotal


    }
})

document.getElementById('save-btn').addEventListener('click', function () {

    const saveMoney = getInputValue('save-input')

    const income = getInputValue('income')
    // get save money per percentage
    if (isNaN(saveMoney) || saveMoney < 0) {
        return alert('please input valid amount of money in number format in save-input')
    }
    else {
        const savingAmount = document.getElementById('saving-amount')
        savingAmount.innerText = (income * saveMoney) / 100

        const totalBalance = document.getElementById('balance')
        // get remainig balance
        const remainingBalance = document.getElementById('remaining-balance')
        remainingBalance.innerText = totalBalance.innerText - savingAmount.innerText
    }

})
