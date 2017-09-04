var instructions = [["mix the sauce ingredients in a large bowl", "add chicken and store in the fridge for at least 1 hour", "pour 1 tbsp of olive oil in a pan", "add chicken and stir-fry until golden brown"],["mix the sauce ingredients in a large bowl", "add chicken and store in the fridge for at least 1 hour", "pour 1 tbsp of olive oil in a pan", "add chicken and stir-fry until golden brown"], ["mix the sauce ingredients in a large bowl", "add chicken and store in the fridge for at least 1 hour", "pour 1 tbsp of olive oil in a pan", "add chicken and stir-fry until golden brown"]]

var div = document.getElementById('content');

    var ol = document.createElement('OL'); 

var specificI = instructions[x];

// loop through the fruits array
for(var i = 0; i < 4; i++){
        // create an arbitrary li element
	var li = document.createElement('LI');
	content = document.createTextNode(specificI[i]); // create a textnode to the document

  li.appendChild(content); // append the created textnode above to the li element
  ol.appendChild(li); // append the created li element above to the ul element
}
div.appendChild(ol);