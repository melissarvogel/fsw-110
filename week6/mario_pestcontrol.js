let finalcost = document.getElementById("calculate")
const cost = function(){
    number1Add = document.getElementById("goombaInput")
    number2Add = document.getElementById("bobInput")
    number2Add = document.getElementById("cheepInput")

    const sum = parseInt(number1Add.value * 5) + parseInt(number2Add.value * 7) + parseInt(number3Add.value * 11)
    const resultAdd = document.getElementById("resultAdd")
    resultAdd.innerText = sum;
}
finalcost.addEventListener("click", cost);