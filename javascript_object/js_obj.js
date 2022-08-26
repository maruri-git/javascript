// 1. Program and observe the following requirements:
// --- Create a null object and set its variable name as user;
// --- Add a name attribute and set its value as John;
// --- Add a surname attribute and set its value as Mike;
// --- Modify the value of name attribute as Peter;
// --- Delete name attribute of user.

var user = {}
user.name = 'John'
user.surname = 'Mike'
console.log(user)
user.name = 'Peter'
console.log(user)
delete user.name
console.log(user)

// 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50.

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

function calculateTotalFruits() {
    var totalFruits = 0;

    totalFruits = fruit.apple + fruit.pear + fruit.peach

    console.log(`Total Fruits: ${totalFruits}`)
}
calculateTotalFruits()