
var fruitArray = [
  {
    name: "banana",
    number: 1,
    image: "images/banana.jpg"
  },
  {
    name: "cucumber",
    number: 2,
    image: "images/cucumber.gif"
  },
  {
    name: "apple",
    number: 4,
    image: "images/apple.jpg"
  }
]

// Start the loop with false guess
var fruitInFridge = false

// Keep asking user to enter fruit until they find a match
while (fruitInFridge==false) {

  // Ask the user to enter a fruit
  var fruitGuess = prompt("Enter a fruit")
  fruitGuess = fruitGuess.toLowerCase()

  // Loop through the objects in fruitArray
  for (i=0; i<fruitArray.length; i++) {

    // Find an object that matches the user fruitGuess
    if (fruitArray[i].name.includes(fruitGuess)) {
      var idx = i
      fruitInFridge = true
    }
  }

  // No match was found
  if (fruitInFridge==false) {
    alert(`${fruitGuess} is not in/on my fridge. Try again!`)
  }
}

// Found a match (idx = matching array index --> points to object)
alert(`Good guess! ${fruitGuess} is in/on my fridge`)
document.write(`There are ${fruitArray[idx].number} ${fruitArray[idx].name} in my fridge`)

// Style the image directly with JS
document.body.style.backgroundImage = `url(${fruitArray[idx].image})`
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "50%"
