// Fetch and display all recipes
async function loadRecipes() {
    try {
        const response = await fetch('/api/recipes/all');
        const recipes = await response.json();
        
        const container = document.getElementById('recipes-grid');
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md p-6';
            card.innerHTML = `
                <h3 class="text-xl font-semibold mb-2">${recipe.name}</h3>
                <div class="mb-4">
                    <span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mr-2">
                        ${recipe.mood || 'No mood'}
                    </span>
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        ${recipe.time || 'No time'}
                    </span>
                </div>
                <div class="mb-4">
                    <h4 class="font-medium text-gray-700">Ingredients:</h4>
                    <ul class="list-disc pl-4 text-gray-600">
                        ${recipe.ingredients.split(',').map(ingredient => 
                            `<li>${ingredient.trim()}</li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="mb-4">
                    <h4 class="font-medium text-gray-700">Instructions:</h4>
                    <p class="text-gray-600">${recipe.instructions}</p>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading recipes:', error);
    }
}

// Load recipes when the page loads
document.addEventListener('DOMContentLoaded', loadRecipes); 