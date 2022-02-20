var cookButton = document.querySelector('#cook-button');
var sideButton = document.querySelector('#sideS');
var mainButton = document.querySelector('#mainS');
var dessertButton = document.querySelector('#dessertS')
// var radioButtons = document.querySelectorAll('input[name="course"]');



cookButton.addEventListener("click", showMeal);
sideButton.addEventListener('click', inputSide);
mainButton.addEventListener('click', inputMain);
dessertButton.addEventListener('click', inputDessert);

  // {
  //           let selectedSize;
  //           for (const radioButton of radioButtons) {
  //               if (radioButton.checked) {
  //                   selectedSize = radioButton.value;
  //                   break;

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}
function showMeal() {

}
