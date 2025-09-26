/*     {
      "idCategory": "1",
      "strCategory": "Beef",
      "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
      "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
*/



const categoryContainer = document.querySelector('.js-category-container');
let categories = null;



function getCategoryById(id){
    if (categories === null){
        return null;
    }
    return categories.find(category => category.idCategory === String(id));
}
// using find instead of filter just gives you the first element.


function loadCategories(){
    if (categories === null){
        fetchCategories()
            .then(displayCategories);
    }
    else{
        displayCategories();
    }
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


function fetchCategories(){
    return fetch('https://themealdb.com/api/json/v1/1/categories.php')
    .then(data => data.json())
    .then(response => {
         categories = response.categories;
        return Promise.resolve({categoriesLoaded: true});
    });
}

function displayMealDetails(meals){

}



function loadMealsByCategory(response){
   const mealList = response.meals.slice(0, 10); 

    const mealPromiseList = mealList.map(meal => fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        .then(data => data.json())
);

Promise.allSettled(mealPromiseList)
.then(displayMealDetails);
}

function fetchMealListByCategory(currentCategory){
    const categoryName = currentCategory.strCategory;
    const URL_PREFIX = 'https://themealdb.com/api/json/v1/1/filter.php?c='

    return fetch(URL_PREFIX + categoryName)
    .then(data => data.json());

}


function categoryClicked(event){
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

    fetchMealListByCategory(currentCategory)
        .then(loadMealsByCategory);
    }
    
}

categoryContainer.addEventListener('click' , categoryClicked);


// one option to being able to click on the item is to get the data set by finding the tag's parent element. Easiest way. 