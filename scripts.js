
var fruitArray = ["Banana", "Blueberry", "Peach", "Apple", "Lemon", "Mango", "Raspberry"]

var fruitInFridge = false
while (fruitInFridge==false) {
  var fruitGuess = prompt("Enter a fruit")
  if (fruitArray.includes(fruitGuess)) {
    alert(`Good guess! ${fruitGuess} is in/on my fridge`)
    fruitInFridge = true
  }
  else {
    alert(`${fruitGuess} is not in/on my fridge. Try again!`)
  }
}
