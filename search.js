const searchValue = document.getElementById("search-value");
const searchBtn = document.getElementById("search-icon");
const cardsResult = document.getElementById("cards-container");
const sName = document.getElementById("sName");

let typingTimer;
const doneTypingInterval = 1000;

function doneTyping() {
        getRecipe(searchValue.value);
}

searchValue.addEventListener("input", (e) => {
    clearTimeout(typingTimer);
    if (e.keyCode === 13) {
        const name = searchValue.value;
        getRecipe(name);
    } else if (searchValue.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }

})

searchBtn.addEventListener("click", () => {
    const name = searchValue.value;
    getRecipe(name);
})

async function getRecipe(name) {
    cardsResult.innerHTML = `<i class="fa-solid fa-spinner fa-spin fa-2xl"></i>`;
    const url = `https://forkify-api.herokuapp.com/api/search?q=${name}`;
    const data = await fetch(url);
    const recipesData = await data.json();
    const recipes = recipesData.recipes;
    console.log(recipes);
    console.log(recipesData.error);

    if (recipesData.error) {
        const err = recipesData.error;
        JSON.stringify(err);
        cardsResult.innerHTML = err.slice(0, 36);
    } else {
        cardsResult.innerHTML = ``;
        sName.innerHTML = `FOR : ${name}`;
        recipes.forEach(ele => {
            const card = document.createElement("div");
            card.innerHTML = `<div class="recipe-card">
            <div class="recipe-img">
                <img src="${ele.image_url}" alt="">
            </div>

            <div class="content">
                <h4 class="recipe-name">${ele.title}</h4>
                <h5 class="publisher">${ele.publisher}</h5>
            </div>
            <hr>
            <div class="card-buttons">
                <button id="recipe-details-btn">Details</button>
                <button id="recipe-url-btn"><a href="${ele.source_url}" target="_blank">Recipe URL</a></button>
            </div>
        </div>`;
            cardsResult.appendChild(card);

            const detailsBtn = card.querySelector("#recipe-details-btn");
            detailsBtn.addEventListener("click", () => {
                let baseUrl = (window.location.href).split("/");
                baseUrl[4] = `details.html?rId=${ele.recipe_id}`;
                console.log(baseUrl[4]);
                newUrl = baseUrl.join("/");
                console.log(newUrl);
                window.location.href = newUrl;
            })
        });
    }

}