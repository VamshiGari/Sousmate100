
document.getElementById('NameR').innerHTML = localStorage.getItem('name');
var x;
window.x;
if((localStorage.getItem('name')).toString() == "Barbeque Chicken")
{
x = 0;
}
else if((localStorage.getItem('name')).toString() == "Chicken Curry")
{
x = 1;
}
else
{
x = 2;
}

var yield = ["4 servings", "4 servings", "8 servings"];
var selectY = yield[x];
document.getElementById('NameY').innerHTML = "Yield is: "+selectY;
var cookTime= ["45 minutes", "45 minutes", "25 minutes"];
var selectC = cookTime[x];
document.getElementById('NameC').innerHTML = "Cook Time: "+selectC;

var data = [["Cup of sugar ", "1 tsp of vinegar","2 tbsp of ketchup","2 chicken breasts"],
["3 tablespoons olive oil", "1 small onion, chopped","2 cloves garlic, minced","3 tablespoons curry powder","1 teaspoon ground cinnamon","1 teaspoon paprika","1 bay leaf","1/2 teaspoon grated fresh ginger root","1/2 teaspoon white sugar","2 skinless, boneless chicken breast halves - cut into bite-size pieces","1 tablespoon tomato paste","salt","1 cup plain yogurt","3/4 cup coconut milk","1/2 lemon, juiced","1/2 teaspoon cayenne pepper"], 
["12 whole wheat lasagna noodles", "1 pound lean ground beef (chuck)","2 cloves garlic, chopped","1/2 teaspoon garlic powder", "1 (16 ounce) package cottage cheese", "2 eggs", "1/2 cup shredded Parmesan cheese", "1 1/2 (25 ounce) jars tomato-basil pasta sauce", "2 cups shredded mozzarella cheese"]];


var div = document.getElementById('content');

    var ol = document.createElement('OL'); 

var specificD = data[x];

// loop through the fruits array
for(var i = 0; i < data[x].length; i++){
        // create an arbitrary li element
	var li = document.createElement('LI');
	content = document.createTextNode(specificD[i]); // create a textnode to the document

  li.appendChild(content); // append the created textnode above to the li element
  ol.appendChild(li); // append the created li element above to the ul element
}
div.appendChild(ol);



