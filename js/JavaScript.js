function createRecipe(){

    const title = document.getElementById('titel').value;
    const ingredients = document.getElementById('zutaten').value;
    const instructions = document.getElementById('zubereitung').value;

    const newDiv = document.createElement('div');
    newDiv.className = 'recipe'; 


    newDiv.innerHTML = `
        <h3>${title}</h3>
        <p>Zutaten: ${ingredients}</p> 
        <p>Zubereitung:${instructions}</p>
    `;

    document.getElementById('recipesContainer').appendChild(newDiv);
}