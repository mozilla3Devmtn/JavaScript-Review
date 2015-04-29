var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

// var last = function(arr){
// 	arrLast = arr.slice([arr.length - 1], 1);
// 	return arrLast;
// }
var last = function (arr){
  return arr[arr.length - 1]
 }

alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var remOdd = function(arr){
	for (var i = 0; i < arr.length; i++){
		if(arr[i] % 2){
			arr.splice(i, 1);
		}
	}
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var compareRandom = function(arr) {
	var compareMe = Math.floor(Math.random() * (30 - 0) + 0);
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === compareMe){
			alert("true");
			break;
		} else{
			alert("false");
			break;
		}
	}
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var copyAdd = function(theArr){
	second = theArr.slice(0, theArr.length-1);
	second.push(6, 7);
}
copyAdd(first);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(str){
	var testArr = str.split(' ');
	var longest = testArr[0];
	for ( var i = 1; i < testArr.length; i++){
		if (testArr[i].length > longest.length){
			longest = testArr[i];
		}
	}return longest;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(str){
	var capMe = str.split(" ");
	var smaller = capMe.split('');

} 

//from http://stackoverflow.com/questions/7743582/trying-to-capitalize-the-first-character-in-array-of-strings-why-this-is-not-wo
// function camelize(str){
//     var newStr = "";    
//     var newArr = [];
//     if(str.indexOf("-") != -1){
//         newArr = str.split("-");
//         for(var i = 1 ; i < newArr.length ; i++){
//             newArr[i].charAt(0).toUpperCase();
//         }       
//         newStr = newArr.join("");
//     }
//     return newStr;
// }
//     for(var i = 1 ; i < newArr.length ; i++){
//         newArr[i] = newArr[i].charAt(0).toUpperCase();
//     }      
//       newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.


