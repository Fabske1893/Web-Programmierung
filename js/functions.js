


function goToAccount() {
    window.location.href = './login/Account.html';
}
function goToHomepage(){
    window.location.href = './Homepage.html'; // Zur Homepage weiterleiten
}
function goToLogin(){
    window.location.href = './login/Login.html'; // Zur Login-Seite weiterleiten
}


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

