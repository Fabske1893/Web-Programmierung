// Diese Funktion wird ausgeführt, sobald die Homepage.html komplett geladen ist.
document.addEventListener('DOMContentLoaded', function() {
    // Überprüfe, ob wir auf der Homepage sind, bevor die Rezepte geladen werden
    if (document.getElementById('recipeContainer')) {
        loadAndDisplayRecipes();
    }
});


function loadAndDisplayRecipes() {
   
    const backendUrl = "https://rezeptappbackend-a9a2cded5f95.herokuapp.com/api/recipes";

    const container = document.getElementById('recipeContainer');

    fetch(backendUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht in Ordnung. Status: ' + response.status);
            }
            return response.json(); 
        })
        .then(recipes => {
            container.innerHTML = ''; 

            if (!recipes || recipes.length === 0) {
                container.innerHTML = '<p>Keine Rezepte gefunden.</p>';
                return;
            }

            
            recipes.forEach(recipe => {
                
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe'; 
                recipeCard.setAttribute('data-name', recipe.name.toLowerCase());
                recipeCard.setAttribute('data-date', recipe.creationDate || '2025-01-01');
                recipeCard.setAttribute('data-difficulty', recipe.difficultyLevel);
                recipeCard.setAttribute('data-likes', recipe.likes || 0);
                                
                recipeCard.innerHTML = `
                    <img src="images/${recipe.pictureUrl}" alt="Bild von ${recipe.name}" style="width:100%;">
                    <h3>${recipe.name}</h3>
                    <p><strong>Kategorie:</strong> ${recipe.category}</p>
                    <p><strong>Schwierigkeit:</strong> ${recipe.difficultyLevel}</p>
                    <p><strong>Likes:</strong> ${recipe.likes || 0}</p>
                `;   
                const link = document.createElement('a');
                link.href = `recipes/Recipe.html?id=${recipe.id}`; 
                link.style.textDecoration = 'none'; 
                link.style.color = 'inherit';                   
                link.appendChild(recipeCard);
                container.appendChild(link); 
            });
        })
        .catch(error => {
            console.error('Fehler beim Laden der Rezepte:', error);
            container.innerHTML = '<p style="color: red;">Fehler: Rezepte konnten nicht geladen werden. Läuft das Backend?</p>';
        });
}

function goToAccount() {
    window.location.href = './login/Account.html';
}