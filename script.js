alert("Now text program is working!");
var text = prompt("Enter your damn text!");
var neededWord = prompt("Enter word you want to change!");
var changeWord = prompt("Enter word you want change to");

var result = text.replaceAll(neededWord, changeWord);

alert(result);
console.log("Length of text's words: " + text.split(" ").length);
console.log("Length of text's letters: " + text.replaceAll(" ","").length);
