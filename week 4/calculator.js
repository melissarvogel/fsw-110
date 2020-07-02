let addButton = document.getElementById("addButton")
const plusOperation = function(){
    number1Add = document.getElementById("number1Add")
    number2Add = document.getElementById("number2Add")

    const sum = parseInt(number1Add.value) + parseInt(number2Add.value)
    const resultAdd = document.getElementById("resultAdd")
    resultAdd.innerText = sum;
}
addButton.addEventListener("click", plusOperation);

let subButton = document.getElementById("subButton")
const subtractOperation = function(){
    number1Sub = document.getElementById("number1Sub")
    number2Sub = document.getElementById("number2Sub")

    const diff = parseInt(number1Sub.value) + parseInt(number2Sub.value)
    const resultSub = document.getElementById("resultSub")
    resultSub.innerText = diff
}
subButton.addEventListener("click", subtractOperation);

let multButton = document.getElementById("multButton")
const multiplyOperation = function(){
    number1mul = document.getElementById("number1mul")
    number2mul = document.getElementById("number2mul")

    const product = parseInt(number1mul.value) + parseInt(number2mul.value)
    const resultSub = document.getElementById("resultMul")
    resultSub.innerText = product
}
multButton.addEventListener("click", multiplyOperation);

