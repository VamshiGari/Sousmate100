var recipeName = [['Barbeque Chicken', 'b.png'], ['Chicken Curry', 'cc.png'], ['Lasagna', 'l.png']];
var recipeSyn = ['A deligtful and tasty dinner addition anytime! Combines a barbeque flavor withold fashion chicken wings.', 'A traditional yet spicy and tasty indian dish that has been reinvented and remade for many years.', 'The traditional american dish that combines flavours of cheese, bread, and other herbs along with some steak to create one of the most sought after dinner dishes!']
var randomR =  Math.floor(Math.random() * recipeName.length);
var randomName = recipeName[randomR][0];
var randomSyn = recipeSyn[randomR]
var randomPic = recipeName[randomR][1];
window.randomName = recipeName[randomR][0];
window.randomPic = recipeName[randomR][1];
window.randomSyn = recipeSyn[randomR];

    document.getElementById('RecipeName').innerHTML = randomName;
    document.getElementById('pic').src = randomPic;
   document.getElementById('RecipeSyn').innerHTML = randomSyn;

    localStorage.setItem('name', randomName);