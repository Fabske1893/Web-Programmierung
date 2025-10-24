const sortSelect = document.getElementById('sort');
sortSelect.addEventListener('change', function() {
    
    const sortBy = this.value; 
    sortRecipes(sortBy);
});

/**
 * Sorts the recipe cards in the container.
 * @param {string} criteria 
 */
function sortRecipes(criteria) {
    const container = document.getElementById('recipeContainer');
    
    const recipes = Array.from(container.querySelectorAll('.recipe'));

   
    recipes.sort((a, b) => {
        switch (criteria) {
            case 'likes':
                // Sort by likes desc
                const likesA = parseInt(a.getAttribute('data-likes'));
                const likesB = parseInt(b.getAttribute('data-likes'));
                return likesB - likesA; 

            case 'alphabet':
                
                const nameA = a.getAttribute('data-name');
                const nameB = b.getAttribute('data-name');
                return nameA.localeCompare(nameB);

            case 'date':
                
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));
                return dateB - dateA; 
            
            default:
                return 0;
        }
    });

    
    container.innerHTML = '';
    recipes.forEach(recipe => container.appendChild(recipe));
}

const filterSelect = document.getElementById('filter');


filterSelect.addEventListener('change', function() {
    const selectedDifficulty = this.value; // z.B. "easy", "medium", "hard"
    filterRecipes(selectedDifficulty);
});

/**
 * @param {string} difficulty - Der ausgewählte Schwierigkeitsgrad.
 */
function filterRecipes(difficulty) {
    const recipes = document.querySelectorAll('.recipe'); 

    recipes.forEach(recipe => {
       
        const recipeDifficulty = recipe.getAttribute('data-difficulty').toLowerCase();

        
        if (difficulty === 'all' || recipeDifficulty === difficulty) {
            recipe.style.display = 'inline-block'; 
        } else {
            recipe.style.display = 'none'; 
        }
    });
}