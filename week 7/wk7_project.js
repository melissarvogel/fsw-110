let form = document.getElementById("webdev")

const responses = function(){
const inputOne = document.getElementById("firstInput")
const inputTwo = document.getElementById("secondInput")

const response = parseInt(inputOne.value)+(inputTwo.value)
response.innerhtml = response;
}
const submit = document.getElementById("submit").addEventListener("click", responses)

