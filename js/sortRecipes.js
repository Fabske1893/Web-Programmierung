const sortSelect = document.getElementById('sort');
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        sortRecipes(sortBy);
    });
}

/**
 * Sorts the recipe cards in the container.
 * @param {string} criteria 
 */
function sortRecipes(criteria) {
    const container = document.getElementById('recipeContainer');
    
    const recipes = Array.from(container.querySelectorAll('.recipe'));

   
    recipes.sort((a, b) => {
        switch (criteria) {
            case 'alphabet':
                
                const nameA = a.getAttribute('data-name');
                const nameB = b.getAttribute('data-name');
                return nameA.localeCompare(nameB);

            case 'date':
                
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));
                return dateB - dateA; 
            case 'difficulty':
                const rank = v => ({ 'easy': 1, 'medium': 2, 'hard': 3 })[v] || 2;
                const dA = a.getAttribute('data-difficulty');
                const dB = b.getAttribute('data-difficulty');
                return rank(dA) - rank(dB);
            
            default:
                return 0;
        }
    });

    
    container.innerHTML = '';
    recipes.forEach(recipe => container.appendChild(recipe));
}

const filterSelect = document.getElementById('filter');
const categorySelect = document.getElementById('filterCategory');
if (filterSelect) {
    filterSelect.addEventListener('change', applyFilters);
}
if (categorySelect) {
    categorySelect.addEventListener('change', applyFilters);
}

/**
 * @param {string} difficulty - Der ausgewählte Schwierigkeitsgrad.
 */
function applyFilters() {
    const recipes = document.querySelectorAll('.recipe');
    const difficulty = filterSelect ? filterSelect.value : 'all';
    const category = categorySelect ? categorySelect.value : 'all';

    recipes.forEach(recipe => {
        const recipeDifficulty = recipe.getAttribute('data-difficulty');
        const recipeCategory = (recipe.getAttribute('data-category') || '').toLowerCase();

        const diffOk = (difficulty === 'all' || recipeDifficulty === difficulty);
        const catOk = (category === 'all' || recipeCategory === category.toLowerCase());
        recipe.style.display = (diffOk && catOk) ? 'inline-block' : 'none';
    });
}

