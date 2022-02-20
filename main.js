var letsCookButton = document.querySelector('.cooking-button');
var sideButton = document.querySelector('#sideS');
var mainButton = document.querySelector('#mainS');
var dessertButton = document.querySelector('#dessertS');
// var radioButtons = document.querySelector('input[name="course"]:checked');
// var radioButtons = document.querySelectorAll('input[name="course"]');



letsCookButton.addEventListener('click', showMeal);
sideButton.addEventListener('click', inputSide);
// mainButton.addEventListener('click', inputMain);
// dessertButton.addEventListener('click', inputDessert);

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function showMeal() {
var cookPot = document.querySelector('.cook-pot');
var showMeal = document.querySelector('.meal');
var radioButtons = document.querySelector('input[name="course"]:checked');
if (radioButtons != null) {
  hideElement(cookPot);
  showElement(showMeal);
}
// cookPot.classList.add('hidden');
// for (var i = 0; i < radioButtons.length: i++);
// if (radioButtons[i].checked === true) {
// if (document.getElementByName('course').checked)
  // hideElement(cookPot);
}
// hideElement(cookPot);


function inputSide() {

var radioButtonBox = document.querySelector('.meal');
var randomDispalyedMeal = sidesArray[getRandomFood(sidesArray)];
var displayMeal = document.querySelector('.meal-display');
dispalyedMeal.innerText = randomDisplayedMeal;
showElement(radioButonBox)
};

console.log(inputSide);

// function randomMeal() {
//   var side =
// }

function getRandomFood(foodCourse) {
  return Math.floor(Math.random() * foodCourse.length);
}
var sidesArray = ['Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];

var mainsArray =['Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza']

var dessertsArray = ['Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs']
