const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('recipes.db');

const recipes = [
    // Mood-based recipes
    {
        name: "Protein-Packed Chicken Stir Fry",
        ingredients: "2 chicken breasts, 2 cups broccoli, 1 red bell pepper, 1/2 cup edamame, 2 tbsp soy sauce, 1 tbsp honey, 1 tbsp ginger, 2 cloves garlic, 1 tbsp olive oil, 1/4 cup cashews",
        instructions: "1. Cut chicken into bite-sized pieces. 2. Heat oil in pan, add garlic and ginger. 3. Add chicken and cook until done. 4. Add vegetables and stir fry. 5. Mix in soy sauce and honey. 6. Top with cashews.",
        mood: "energetic",
        time: "quick"
    },
    {
        name: "Greek Yogurt Protein Bowl",
        ingredients: "2 cups Greek yogurt, 1 scoop protein powder, 1/4 cup granola, 1/4 cup mixed berries, 2 tbsp honey, 2 tbsp chia seeds, 1/4 cup almonds",
        instructions: "1. Mix Greek yogurt with protein powder. 2. Divide into two bowls. 3. Top with granola, berries, and almonds. 4. Drizzle with honey and sprinkle chia seeds.",
        mood: "happy",
        time: "quick"
    },
    {
        name: "Beef and Quinoa Stuffed Peppers",
        ingredients: "2 large bell peppers, 1/2 lb lean ground beef, 1 cup cooked quinoa, 1/2 cup black beans, 1/2 cup corn, 1/2 cup tomato sauce, 1/2 cup shredded cheese, 1 tbsp taco seasoning",
        instructions: "1. Preheat oven to 375°F. 2. Cut tops off peppers and remove seeds. 3. Brown beef with taco seasoning. 4. Mix beef with quinoa, beans, corn, and tomato sauce. 5. Stuff peppers and top with cheese. 6. Bake for 25-30 minutes.",
        mood: "comfort",
        time: "medium"
    },
    {
        name: "Spicy Tuna Poke Bowl",
        ingredients: "1/2 lb sushi-grade tuna, 2 cups cooked brown rice, 1 avocado, 1/2 cucumber, 1/4 cup edamame, 2 tbsp soy sauce, 1 tbsp sriracha, 1 tbsp sesame oil, 1 tbsp sesame seeds",
        instructions: "1. Cube tuna and mix with soy sauce, sriracha, and sesame oil. 2. Divide rice between two bowls. 3. Top with tuna, sliced avocado, cucumber, and edamame. 4. Sprinkle with sesame seeds.",
        mood: "adventurous",
        time: "quick"
    },
    {
        name: "Turkey and Egg White Scramble",
        ingredients: "8 egg whites, 1/2 lb ground turkey, 1/2 cup spinach, 1/2 cup mushrooms, 1/4 cup feta cheese, 1 tbsp olive oil, salt and pepper to taste",
        instructions: "1. Cook turkey in pan until browned. 2. Add mushrooms and spinach. 3. Pour in egg whites and scramble. 4. Add feta cheese and season to taste.",
        mood: "energetic",
        time: "quick"
    },
    {
        name: "Salmon and Asparagus Sheet Pan",
        ingredients: "2 salmon fillets, 1 bunch asparagus, 1 cup cherry tomatoes, 2 tbsp olive oil, 1 lemon, 2 cloves garlic, 1 tbsp dill, salt and pepper to taste",
        instructions: "1. Preheat oven to 400°F. 2. Place salmon and vegetables on sheet pan. 3. Drizzle with olive oil and lemon juice. 4. Add garlic, dill, salt, and pepper. 5. Bake for 15-20 minutes.",
        mood: "happy",
        time: "medium"
    },
    {
        name: "Protein-Packed Chili",
        ingredients: "1/2 lb ground turkey, 1/2 lb ground beef, 1 can black beans, 1 can kidney beans, 1 can diced tomatoes, 1 bell pepper, 1 onion, 2 cloves garlic, 2 tbsp chili powder, 1 tbsp cumin",
        instructions: "1. Brown meats in pot. 2. Add chopped vegetables and garlic. 3. Stir in beans, tomatoes, and spices. 4. Simmer for 30 minutes.",
        mood: "comfort",
        time: "long"
    },
    {
        name: "Spicy Thai Peanut Chicken",
        ingredients: "2 chicken breasts, 1/2 cup peanut butter, 2 tbsp soy sauce, 1 tbsp sriracha, 1 tbsp honey, 1 lime, 1/4 cup peanuts, 2 cups cooked brown rice, 1/2 cup shredded carrots",
        instructions: "1. Cook chicken and slice. 2. Mix peanut butter, soy sauce, sriracha, honey, and lime juice. 3. Serve chicken over rice with sauce. 4. Top with carrots and peanuts.",
        mood: "adventurous",
        time: "medium"
    },
    // Time-based recipes
    {
        name: "Quick Protein Omelette",
        ingredients: "6 egg whites, 1/4 cup diced ham, 1/4 cup shredded cheese, 1/4 cup spinach, 1 tbsp olive oil, salt and pepper to taste",
        instructions: "1. Heat oil in pan. 2. Pour in egg whites. 3. Add fillings to one half. 4. Fold and cook until set.",
        time: "quick"
    },
    {
        name: "Protein Pancakes",
        ingredients: "1 cup oat flour, 1 scoop protein powder, 1 banana, 2 eggs, 1/2 cup Greek yogurt, 1 tsp baking powder, 1/4 cup blueberries",
        instructions: "1. Mix all ingredients except blueberries. 2. Cook on griddle. 3. Top with blueberries.",
        time: "quick"
    },
    {
        name: "Beef and Broccoli Stir Fry",
        ingredients: "1/2 lb flank steak, 2 cups broccoli, 2 tbsp soy sauce, 1 tbsp honey, 1 tbsp ginger, 2 cloves garlic, 1 tbsp cornstarch, 1 tbsp sesame oil",
        instructions: "1. Slice beef and marinate. 2. Stir fry beef and set aside. 3. Cook broccoli. 4. Combine and add sauce.",
        time: "medium"
    },
    {
        name: "Baked Chicken Parmesan",
        ingredients: "2 chicken breasts, 1/2 cup breadcrumbs, 1/4 cup parmesan, 1/2 cup marinara, 1/2 cup mozzarella, 1 egg, 1 tbsp Italian seasoning",
        instructions: "1. Coat chicken in egg and breadcrumb mixture. 2. Bake at 400°F for 20 minutes. 3. Top with sauce and cheese. 4. Bake 5 more minutes.",
        time: "medium"
    },
    {
        name: "Slow Cooker Pulled Pork",
        ingredients: "2 lb pork shoulder, 1 cup BBQ sauce, 1 onion, 2 cloves garlic, 1 tbsp brown sugar, 1 tbsp paprika, 1 tbsp mustard",
        instructions: "1. Rub pork with spices. 2. Place in slow cooker with other ingredients. 3. Cook on low for 8 hours. 4. Shred and serve.",
        time: "long"
    },
    {
        name: "Beef Bourguignon",
        ingredients: "1 lb beef chuck, 2 cups red wine, 1 onion, 2 carrots, 2 cloves garlic, 1 cup mushrooms, 2 tbsp flour, 2 cups beef broth",
        instructions: "1. Brown beef. 2. Sauté vegetables. 3. Add wine and broth. 4. Simmer for 2-3 hours.",
        time: "long"
    },
    {
        name: "Meal Prep Chicken and Rice",
        ingredients: "4 chicken breasts, 2 cups brown rice, 2 cups mixed vegetables, 2 tbsp olive oil, 2 tbsp Italian seasoning, salt and pepper to taste",
        instructions: "1. Season and bake chicken. 2. Cook rice. 3. Roast vegetables. 4. Divide into containers.",
        time: "mealprep"
    },
    {
        name: "Protein-Packed Breakfast Burritos",
        ingredients: "8 eggs, 1/2 lb turkey sausage, 1 cup black beans, 1 cup cheese, 4 large tortillas, 1 bell pepper, 1 onion",
        instructions: "1. Cook all ingredients. 2. Assemble burritos. 3. Wrap in foil. 4. Freeze for later.",
        time: "mealprep"
    },
    {
        name: "Warm Milk and Honey Oatmeal",
        ingredients: "1 cup rolled oats, 2 cups milk, 2 tbsp honey, 1/2 tsp cinnamon, 1/4 tsp nutmeg, 1 banana, 1 tbsp almond butter, 1/4 cup walnuts",
        instructions: "1. Heat milk in saucepan. 2. Add oats and cook until creamy. 3. Stir in honey, cinnamon, and nutmeg. 4. Top with sliced banana, almond butter, and walnuts.",
        mood: "sleepy",
        time: "quick"
    },
    {
        name: "Turkey and Sweet Potato Mash",
        ingredients: "1/2 lb ground turkey, 2 sweet potatoes, 1/2 cup spinach, 1/4 cup feta cheese, 1 tbsp olive oil, 1/2 tsp rosemary, 1/2 tsp thyme, salt and pepper to taste",
        instructions: "1. Bake sweet potatoes until soft. 2. Cook turkey with herbs. 3. Mash sweet potatoes with olive oil. 4. Mix in turkey, spinach, and feta.",
        mood: "sleepy",
        time: "medium"
    },
    {
        name: "Chamomile Tea Poached Chicken",
        ingredients: "2 chicken breasts, 2 cups chamomile tea, 1/2 cup quinoa, 1/2 cup steamed carrots, 1/4 cup almonds, 1 tbsp honey, 1 tbsp olive oil",
        instructions: "1. Poach chicken in chamomile tea. 2. Cook quinoa. 3. Slice chicken and serve over quinoa. 4. Top with carrots, almonds, and honey drizzle.",
        mood: "sleepy",
        time: "medium"
    },
    {
        name: "Lavender Honey Salmon",
        ingredients: "2 salmon fillets, 2 tbsp honey, 1 tbsp dried lavender, 1/2 cup couscous, 1/2 cup steamed asparagus, 1 lemon, 1 tbsp olive oil",
        instructions: "1. Mix honey and lavender. 2. Coat salmon with mixture. 3. Bake at 375°F for 15 minutes. 4. Serve with couscous and asparagus.",
        mood: "sleepy",
        time: "medium"
    },
    {
        name: "Sleepy Time Smoothie",
        ingredients: "1 banana, 1/2 cup Greek yogurt, 1/2 cup milk, 1 tbsp honey, 1/4 tsp cinnamon, 1/4 tsp nutmeg, 1 tbsp almond butter, 1/4 cup oats",
        instructions: "1. Blend all ingredients until smooth. 2. Pour into glasses. 3. Sprinkle with additional cinnamon if desired.",
        mood: "sleepy",
        time: "quick"
    },
    {
        name: "Warm Quinoa and Cherry Bowl",
        ingredients: "1 cup cooked quinoa, 1/2 cup cherries, 1/4 cup walnuts, 1 tbsp honey, 1/2 tsp cinnamon, 1/4 cup Greek yogurt",
        instructions: "1. Warm quinoa. 2. Mix in cherries and walnuts. 3. Drizzle with honey and cinnamon. 4. Top with Greek yogurt.",
        mood: "sleepy",
        time: "quick"
    }
];

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        mood TEXT,
        time TEXT
    )`);

    const stmt = db.prepare("INSERT INTO recipes (name, ingredients, instructions, mood, time) VALUES (?, ?, ?, ?, ?)");
    
    recipes.forEach(recipe => {
        stmt.run(recipe.name, recipe.ingredients, recipe.instructions, recipe.mood, recipe.time);
    });

    stmt.finalize();
});

db.close(); 