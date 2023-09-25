const image = document.getElementById("dish-img");
const title = document.getElementById("name");
const publisher = document.getElementById("provider");
const publiLink = document.getElementById("publi-webpage");
const recipeLink = document.getElementById("recipe-url");
const iList = document.getElementById("iList");

const urlString = window.location.href;
let paramString = urlString.split('?')[1];

let pair = paramString.split('=');
let recipeID = pair[1];

console.log(recipeID);

async function getDetails(recipeID) {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`;
    const data = await fetch(url);
    const details = await data.json();
    console.log(details.recipe);

    image.src = `${details.recipe.image_url}`;
    title.innerHTML = details.recipe.title;
    publisher.innerHTML = "Provided By " + details.recipe.publisher;
    publiLink.href = details.recipe.publisher_url;
    recipeLink.href = details.recipe.source_url;

    const items = details.recipe.ingredients;
    console.log(items);

    items.forEach(ele => {
        const item = document.createElement("div");
        item.innerHTML = ele;
        item.classList.add('items');
        iList.appendChild(item);
    });
}

getDetails(recipeID);