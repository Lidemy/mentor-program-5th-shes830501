var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
	lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
	solve(lines)
})
  
  
function solve(lines){
	var line = lines[0]  
	//console.log(line) 
	var array = lines[0].split('')
	//console.log(array)
	var reversed_array = array.reverse()
	//console.log(reversed_array)
	var reversed_str = reversed_array.join('')
	//console.log(reversed_str)
	if (line == reversed_str) {
		console.log('True') 
	}
	else {
		console.log('False') 
	}
}

//solve(['abba'])
//solve(['ac'])
//solve(['dgdgdgd'])

/*function reverseString(str) {
	var myArray = str.split("");
  	var  a = myArray.reverse();
 	 var str1 = a.join("");
  	return str1;
}

reverseString("hello");*/

/*function reverse(str) {
	var strReverse = ''
	for (var i = str.length - 1; i >= 0; i--) { 
		strReverse += str[i]
	}
	return strReverse
}

console.log(reverse('hello'))*/
