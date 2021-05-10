document.getElementById('button').addEventListener('click',compare)
let age = 0

function compare() {
  age = document.getElementById('input').value
  age =  parseInt(age)

  if (age >= 17) {
  userInput = document.getElementById('answer').innerHTML = "You can see R rated movies"
  } else if (age >= 13) {
  userInput = document.getElementById('answer').innerHTML = "You can see PG-13 movies"
  } else {
  userInput = document.getElementById('answer').innerHTML = "You can see PG and G rated movies"
  }
}