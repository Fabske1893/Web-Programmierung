function sortByLikes(){
    let recipes = document.querySelectorAll('.recipe');
    let sortedRecipes = Array.from(recipes).sort((a, b) => {
        let likesA = parseInt(a.likes) || 0;
        let likesB = parseInt(b.likes) || 0;
        return likesB - likesA; // Absteigend sortieren
    });
}
function sortByDate(){}

function sortByAlphabet(){}

