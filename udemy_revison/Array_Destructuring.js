"use strict"

const restaurant = {
name: 'bombay local',
location: 'bombay local ground floor sushma',
categories: ['indian', 'italian', 'vegan', 'veg', 'non veg'],
starterMenu: ['noodles', 'paneer tikka', 'mushrrom', 'etc'],
mainMenu: ['dal', 'paneer sabji', 'dal makhni', 'roti'],

order: function(starterIndex, menuIndex){
return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]]
}
};

const {name, location, categories, starterMenu, mainMenu, order} = restaurant;

let [indian, italian] = categories;

// console.log(indian);
// console.log(italian);

// *** switching variable
// let temporaryVariable= indian;
// indian = italian;
// italian = temporaryVariable
// console.log(temporaryVariable;
// console.log("indian", indian);
// console.log("italian",italian);

// *** using descructuring
 [indian, italian] = [italian, indian]

// console.log("indian", indian);
// console.log("italian",italian);

const [starter, mainCourse] = restaurant.order(2,0);

// console.log("starter", starter, '&&', "mainCourse", mainCourse);

// Nested descructuring

const nested = [2,4,[5,6]];

const [i, ,[j, k]] =  nested;

// console.log(i, j, k);

const [p=1,q=1,r=1] = [7,8]

console.log(p,q,r);
