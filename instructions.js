var instructions = [["Mix the sauce ingredients in a large bowl", "Add chicken and store in the fridge for at least 1 hour", "Pour 1 tbsp of olive oil in a pan", "Add chicken and stir-fry until golden brown"],
["Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. ", "Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. ", "Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.", "Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes."], 
["Preheat oven to 350 degrees F (175 degrees C).", "Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Once the water is boiling, add the lasagna noodles a few at a time, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, about 10 minutes. Remove the noodles to a plate.", "Place the ground beef into a skillet over medium heat, add the garlic, garlic powder, oregano, salt, and black pepper to the skillet. Cook the meat, chopping it into small chunks as it cooks, until no longer pink, about 10 minutes. Drain excess grease.", "In a bowl, mix the cottage cheese, eggs, and Parmesan cheese until thoroughly combined.", "Place 4 noodles side by side into the bottom of a 9x13-inch baking pan; top with a layer of the tomato-basil sauce, a layer of ground beef mixture, and a layer of the cottage cheese mixture. Repeat layers twice more, ending with a layer of sauce; sprinkle top with the mozzarella cheese. Cover the dish with aluminum foil.", "Bake in the preheated oven until the casserole is bubbling and the cheese has melted, about 30 minutes. Remove foil and bake until cheese has begun to brown, about 10 more minutes. Allow to stand at least 10 minutes before serving."]]
var div = document.getElementById('content');

    var ol = document.createElement('OL'); 

var specificI = instructions[x];

// loop through the fruits array
for(var i = 0; i < instructions[x].length; i++){
        // create an arbitrary li element
	var li = document.createElement('LI');
	content = document.createTextNode(specificI[i]); // create a textnode to the document

  li.appendChild(content); // append the created textnode above to the li element
  ol.appendChild(li); // append the created li element above to the ul element
}
div.appendChild(ol);