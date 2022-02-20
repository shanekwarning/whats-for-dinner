var letsCookButton = document.querySelector('.cooking-button');
var sideButton = document.querySelector('#sideS');
var mainButton = document.querySelector('#mainS');
var dessertButton = document.querySelector('#dessertS');
var showAddRecipeButton = document.querySelector('.recipe');
var recipeTypeInput = document.querySelector('#recipe-type-input');
var recipeNameInput = document.querySelector('#recipe-name-input');
var addNewButton = document.querySelector('.add-new');
var displayMeal = document.querySelector('.meal-display');
var cookPot = document.querySelector('.cook-pot');
var displayBox = document.querySelector('.meal');

letsCookButton.addEventListener('click', showMeal);
sideButton.addEventListener('click', inputSide);
mainButton.addEventListener('click', inputMain);
dessertButton.addEventListener('click', inputDessert);
showAddRecipeButton.addEventListener('click', addRecipe);
addNewButton.addEventListener('click', submitNewRecipe);

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
}

function inputSide() {
var randomDisplayedMeal = sidesArray[getRandomFood(sidesArray)];
showElement(cookPot);
displayMeal.innerText = randomDisplayedMeal;
hideElement(displayBox);

};

function inputMain() {
var randomDisplayedMeal = mainsArray[getRandomFood(mainsArray)]
showElement(cookPot);
displayMeal.innerText = randomDisplayedMeal;
hideElement(displayBox);
}

function inputDessert() {
  var randomDisplayedMeal = dessertsArray[getRandomFood(dessertsArray)]
  showElement(cookPot);
  displayMeal.innerText = randomDisplayedMeal;
  hideElement(displayBox);
}

function addRecipe() {
  var footer = document.querySelector('.footer-form');
  showElement(footer)
}

function submitNewRecipe() {
  if (recipeTypeInput.value === 'Side') {
    sidesArray.push(recipeNameInput.value)
    displayMeal.innerText = recipeNameInput.value;
    showElement(displayBox);
    hideElement(cookPot)
  } else if (recipeTypeInput.value === 'Main Dish') {
    mainsArray.push(recipeNameInput.value)
  } else if (recipeTypeInput.value === 'Dessert') {
    dessertsArray.push(recipeNameInput.value)
  } else{
    alert('Recipe Type entered does not match, Side, Main Dish, or Dessert')
  }
}

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
