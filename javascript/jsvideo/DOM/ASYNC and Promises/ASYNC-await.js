/* always use the async keyword before a function
async function myFunction() {
    return "Hello";
}

ASYNC () => {} 
    have to use either const or let if you want to use arrow functions "=>"

    async wraps everything in a promise. So you can use .then() on it.


*/ 

// async function getRepos() {
//     let repos = await fetch('https://api.github.com/users/bitcoin/repos');
//     let data = await repos.json();
//     return data;
//     // async functions wrap their return value in a promise.
    
    
// }

// let promise = getRepos();
// let repos = await promise; //top level usage of await to unwrap a promise.
// console.log(repos);


const categoryContainer = document.querySelector('.js-category-container');
let categories = null;
const mealContainer = document.querySelector('.js-meal-container');

function getCategoryById(id){
    if (categories === null){
        return null;
    }
    return categories.find(category => category.idCategory === String(id));
}
// using find instead of filter just gives you the first element.


async function loadCategories(){
    mealContainer.innerHTML = '';
    if (categories === null){
         await fetchCategories();
    }
    displayCategories();
}

function renderCategory(category, wide = false){
    return `
            <div class="category-item ${wide===true? 'wide' : ''}" data-id="${category.idCategory}">
                <h2>${category.strCategory}</h2>
                <img
                    src="${category.strCategoryThumb}" alt="${category.strCategory}"/>
                <p>${category.strCategoryDescription}</p>
            </div>
         `;
}



// defensive programming is encourged because not everyone will understand your code

function displayCategories(){  
    if (categories === null) {
        return;
    }
     categoryContainer.innerHTML = categories
        .map(category => renderCategory(category))
        .join('');
}

// orgastration. If we click on one category, and only want to see that catogery, will can make the others disappear in a sense/ only load the selected category.


async function fetchCategories(){
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const response = await data.json();
    categories = response.categories;
    return Promise.resolve({categoriesLoaded: true}

    );

    return fetch('https://themealdb.com/api/json/v1/1/categories.php')
    .then(data => data.json())
    .then(response => {
         categories = response.categories;
        return Promise.resolve({categoriesLoaded: true});
    });
}

function renderIngredients(meal){
    let html = `<ul class="ingredients-list">`;
    for (let i=1; i<=20; i++){
        const ingredientValue = meal[`strIngredient ` + i];
        const ingredientMesure = meal[`strMeasure ` + i];
        if (typeof ingredientValue ==='string' && ingredientValue.length > 0){
            html += `<li>${ingredientMesure} ${ingredientValue}</li>`;
}

    }
    html += `</ul>`;
    return html;
}


function renderMeal(meal){
    const ingredientsHTML = renderIngredients(meal);
    return `
    <div class="meal">  
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
        <p> ${meal.strInstructions} </p>
        ${ingredientsHTML}
    </div>
    `;
}




function displayMealDetails(mealResponses){
  mealContainer.innerHTML =  mealResponses
    .filter(response  => response.status === 'fulfilled')
    .map(response  => response.value.meals[0]) // these arrays have a length of 1.
    .map(meal => renderMeal(meal))
    .join('');
   
}
// if you have a response , you need a function.


async function loadMealsByCategory(response){
   const mealList = response.meals.slice(0, 10); 

    const mealPromiseList = mealList.map(meal => fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then(data => data.json())
);

let results = await Promise.allSettled(mealPromiseList);
await displayMealDetails(results);
}

async function fetchMealListByCategory(currentCategory){
    const categoryName = currentCategory.strCategory;
    const URL_PREFIX = 'https://themealdb.com/api/json/v1/1/filter.php?c='

    let data = await fetch(URL_PREFIX + categoryName);
    return data.json();
// wrapped in a promise automatically.
   
return await(data => data.json());
// don't do this because it is redundant.
}


async function categoryClicked(event){
    const id = event.target.dataset.id || event.target.parentElement.dataset.id;
    if (typeof id === 'undefined'){
        return;
    }
    if( id === 'all') {
        loadCategories();
    }
    else {
        const currentCategory = getCategoryById(id);

    categoryContainer.innerHTML = `
    ${renderCategory(currentCategory, true)}
    <button data-id="all"> Choose another category</button>
    `;


    mealContainer.innerHTML = 'loading...';

   let mealList = await fetchMealListByCategory(currentCategory);
        await loadMealsByCategory(mealList);
    }
    
}

categoryContainer.addEventListener('click' , categoryClicked);
loadCategories();

// one option to being able to click on the item is to get the data set by finding the tag's parent element. Easiest way. 


