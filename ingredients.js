var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0
while (repeat < 8) {
  console.log(ingredients[repeat]);
  repeat++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var t = 7
while (t > 0) {
  console.log(ingredients[t]);
  t--;
}

for (var k = 7; k > 0; k--) {
  console.log(ingredients[k]);
}