function goToAccount() {
    window.location.href = './login/Account.html';
}
function goToHomepage(){
    window.location.href = './Homepage.html'; // Zur Homepage weiterleiten
}
function goToLogin(){
    window.location.href = './login/Login.html'; // Zur Login-Seite weiterleiten
}

/**  Fügt die Zutaten eines Rezepts zur Einkaufsliste hinzu
 * @param {Object} recipe - Das Rezept-Objekt mit ingredients-Array
 */

function addIngredientsToShoppingList(recipe) {
    if (!recipe || !Array.isArray(recipe.ingredients)) {
        alert('Fehler: Keine Zutaten vorhanden.');
        return;
    }
    
    try {
        const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || {};
        
        recipe.ingredients.forEach(ingredient => {
            const key = (ingredient.name || '').toLowerCase().trim();
            if (!key) return;
            
            const existing = shoppingList[key] || { amount: 0, unit: ingredient.unit || '', name: ingredient.name || '' };
            const newAmount = (typeof ingredient.amount === 'number') ? ingredient.amount : 0;
            const sameUnit = (existing.unit || '') === (ingredient.unit || '');
            
            shoppingList[key] = {
                name: ingredient.name || existing.name || key,
                unit: sameUnit ? (existing.unit || ingredient.unit || '') : (existing.unit || ingredient.unit || ''),
                amount: sameUnit ? ((existing.amount || 0) + newAmount) : (existing.amount || 0)
            };
        });
        
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        alert('Zutaten zur Einkaufsliste hinzugefügt.');
    } catch (error) {
        console.error('Fehler beim Aktualisieren der Einkaufsliste:', error);
        alert('Fehler: Einkaufsliste konnte nicht aktualisiert werden.');
    }
}

// Sendet das aktuelle Rezept per E-Mail an den eingeloggten Benutzer

function sendRecipeEmail() {
    const token = localStorage.getItem('userToken');
    if (!token || token === 'OFF') {
        alert('Fehler: Du musst eingeloggt sein.');
        return;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        alert('Fehler: Keine Rezept-ID gefunden.');
        return;
    }
    
    fetch(`https://rezeptappbackend-a9a2cded5f95.herokuapp.com/api/recipes/${recipeId}/send-email?token=${encodeURIComponent(token)}`, {
        method: 'POST'
    })
    .then(response => response.json().then(body => ({ status: response.status, body })))
    .then(({ status, body }) => {
        if (status >= 200 && status < 300) {
            alert(body.message || 'Rezept wurde per E-Mail gesendet.');
        } else if (status === 401) {
            alert(body.message || 'Nicht eingeloggt.');
        } else {
            alert(body.message || 'E-Mail konnte nicht gesendet werden.');
        }
    })
    .catch(error => {
        console.error('Fehler beim Senden des Rezepts:', error);
        alert('Netzwerkfehler beim Senden des Rezepts.');
    });
}

//Suchfunktion für Rezepte auf der Homepage
function searchRecipe() {
    const inputEl = document.getElementById("searchRecipe");
    if (!inputEl) return;
    const input = inputEl.value.toLowerCase();

    
    const container = document.getElementById("recipeContainer");
    if (!container) return;
    const items = container.querySelectorAll('.recipe');

    items.forEach(item => {
        const titleEl = item.querySelector('h3');
        const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
        item.style.display = titleText.includes(input) ? 'inline-block' : 'none';
    });
}

