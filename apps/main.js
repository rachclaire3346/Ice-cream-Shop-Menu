function displayFlavor () {
	var flavors = ["Chocolate", "Raspberry Chocolate Chip", "Brownie Batter", "Cotton Candy", "Cinnamon Roll", "Chocolate Chip Cookie Dough", "Cookies and Cream", "Vanilla"]
	var list = " ";
	for(var i = 0; i < flavors.length; i++){
		list += flavors[i] + "<br>";
		document.getElementById("flavor").innerHTML= list;
	}    
}

 displayFlavor ();

 function displaySeasonal (){
 	var seasonals = ["Pumpkin Spice", "Apple Cider", "Caramel Apple", "S'mores", "Maple"]
	var list = " ";
	for(var i = 0; i < seasonals.length; i++){
		list += seasonals[i] + "<br>";
		document.getElementById("seasonal").innerHTML= list;
	}    
}

displaySeasonal ();

function displayTopping() {
	var toppings = ["Chocolate Sauce", "Caramel Sauce", "Sprinkles", "Mini Chocolate Chip Cookies", "Chocolate Chips", "Oreos"]
	var list = " ";
	for(var i = 0; i < toppings.length; i++){
		list += toppings[i] + "<br>";
		document.getElementById("topping").innerHTML= list;
	}    
}

displayTopping ();

function displayCone () {
	var cones = ["Sugar Cone", "Waffle Cone", "Cinnamon Waffle Cone", "Chocolate Dipped Waffle Cone", "Chocolate Dipped Waffle Cone With Sprinkles", "Small Cup", "Large Cup"]
	var list = " ";
	for(var i = 0; i < cones.length; i++){
		list += cones[i] + "<br>";
		document.getElementById("cone").innerHTML= list;
	}    
}

displayCone ();


