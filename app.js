//create fetch statements for:
//meal by name
//by main ingredient
//random
//buttons

const mealName = document.querySelector('#dishName')
const ingredientName = document.querySelector('#ingredientForm')
const randomButton = document.querySelector('#random')
//search by name of dish



// get list of ingredients
  function getIngredientsList(){}
  // const ingredientsArray = []
  // for (let i=1; i<=20; i++){
  //   if(`data.meals[0].strIngredient${i}`){
  //     ingredientsArray.push(data.meals[0].strIngredients[i])
  //   }}
  //loop through array and append to DOM
  //object.values




//search by main ingredient
ingredientName.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.children.ingredientInput.value
  // namedFunction(input)
  
  //format search input and add to url in fetch
  let url = ''
  const thing = input.split(' ').join('_')
  debugger
  // function namedFunction(input) {
  //   chars = input.split(' ')
  //   if (chars.length > 1) {
  //     url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${chars[0]}_${chars[1]}`
  //   }
  //   else {
  //     url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${chars[0]}`
  //   }
  // }
  // fetch(url)
  // .then(response => response.json())
  // .then(data => console.log(data))

})

//get random meal
randomButton.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => displayMeal(data))
})
function displayMeal(data){
  const randomMeal = document.querySelector('#randomMealContainer')
  randomMeal.innerHTML = `<h1>${data.meals[0].strMeal}</h1>
  <img src="${data.meals[0].strMealThumb}" alt="">
  <p></p>
  <ul></ul>
  <ol><ol>`}
