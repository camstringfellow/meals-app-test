let currentSelection = null;
let currentMood = null;
let currentTime = null;

document.addEventListener('DOMContentLoaded', () => {
    // Initial selection elements
    const initialSelection = document.getElementById('initial-selection');
    const moodBtn = document.getElementById('mood-btn');
    const timeBtn = document.getElementById('time-btn');

    // Selection screens
    const moodSelection = document.getElementById('mood-selection');
    const timeSelection = document.getElementById('time-selection');
    const recipeContainer = document.getElementById('recipe-container');

    // Back buttons
    const backToInitial = document.getElementById('back-to-initial');
    const backToInitialTime = document.getElementById('back-to-initial-time');
    const backToSelection = document.getElementById('back-to-selection');

    // Recipe display elements
    const recipeName = document.getElementById('recipe-name');
    const ingredientsList = document.getElementById('ingredients');
    const instructions = document.getElementById('instructions');
    const newRecipeBtn = document.getElementById('new-recipe');

    // Initial selection handlers
    moodBtn.addEventListener('click', () => {
        currentSelection = 'mood';
        initialSelection.classList.add('hidden');
        moodSelection.classList.remove('hidden');
    });

    timeBtn.addEventListener('click', () => {
        currentSelection = 'time';
        initialSelection.classList.add('hidden');
        timeSelection.classList.remove('hidden');
    });

    // Back button handlers
    backToInitial.addEventListener('click', () => {
        moodSelection.classList.add('hidden');
        initialSelection.classList.remove('hidden');
    });

    backToInitialTime.addEventListener('click', () => {
        timeSelection.classList.add('hidden');
        initialSelection.classList.remove('hidden');
    });

    backToSelection.addEventListener('click', () => {
        recipeContainer.classList.add('hidden');
        if (currentSelection === 'mood') {
            moodSelection.classList.remove('hidden');
        } else {
            timeSelection.classList.remove('hidden');
        }
    });

    // Mood selection handlers
    document.querySelectorAll('.mood-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentMood = button.dataset.mood;
            moodSelection.classList.add('hidden');
            fetchRecipe('mood', currentMood);
        });
    });

    // Time selection handlers
    document.querySelectorAll('.time-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentTime = button.dataset.time;
            timeSelection.classList.add('hidden');
            fetchRecipe('time', currentTime);
        });
    });

    // New recipe button handler
    newRecipeBtn.addEventListener('click', () => {
        if (currentSelection === 'mood' && currentMood) {
            fetchRecipe('mood', currentMood);
        } else if (currentSelection === 'time' && currentTime) {
            fetchRecipe('time', currentTime);
        }
    });

    async function fetchRecipe(type, value) {
        try {
            const response = await fetch(`/api/recipes/${type}/${value}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipe');
            }
            const recipe = await response.json();
            
            // Display the recipe
            recipeName.textContent = recipe.name;
            ingredientsList.innerHTML = recipe.ingredients.split(',').map(ingredient => 
                `<li>${ingredient.trim()}</li>`
            ).join('');
            instructions.textContent = recipe.instructions;
            
            recipeContainer.classList.remove('hidden');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch recipe. Please try again.');
        }
    }
}); 