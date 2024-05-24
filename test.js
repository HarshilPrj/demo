let array = [1, 2, 4, 5, 6, 7, 8, 9, 2, 3, 4, "1", "b", "c", "d", "e"];

let str = "jhkfvfbwegiwegfiwegifwegfigweigfiegifgwegi";

let newArray = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            newArray.push(array[i]);
        }
    }
}

var newObj = {};
var newStrings = "";

for (let i = 0; i < str.length; i++) {
    if (newObj[str[i]]) {
        newObj[str[i]] = newObj[str[i]] + 1;
    } else {
        newObj[str[i]] = 1;
        newStrings = newStrings + str[i];
    }
}

console.log({ newObj, newStrings, newArray });
