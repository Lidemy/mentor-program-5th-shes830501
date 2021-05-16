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


//拿到所有的資料
function solve(lines) {
	// 5 200 => ['5', '200']
	var temp = lines[0].split(' ')
	console.log(temp)
	var n =Number(temp[0])
	var m =Number(temp[1])
	for(var i = n; i <= m; i ++){
		if (isNarcissistic(i)) {
			console.log(i)
		}
	}
}

//solve(['5 200'])


//回傳數字幾位數
function digitsCount(n) {
	if (n === 0) return 1
	var result = 0
	while (n != 0) { //1234 => 123 => 12 => 1 => 0
		n = Math.floor(n / 10)
		result++
	}
	return result
}

function isNarcissistic(n) {
	//幾位數
	var m = n
	var digits = digitsCount(m)
	var sum = 0 
	//console.log('n:', n)
	//console.log('digits:', digits)
	while (m != 0) {
		var num = m % 10 //1234 % 10 = 4
		//console.log('m:', m, 'num:', num)
		sum += num ** digits // 4^4
		//可改成 Math.pow(num, digits)
		m = Math.floor(m / 10) //1234 /10 = 123(無條件捨去)
	}

	//console.log('sum:', sum)

	//可簡化成 sum === n
	if (sum === n){
		return true
	} else {
		return false
	}
}

//把數字轉換成字串(偷吃步)
function isNstr(n) {
	var str = n + ''  //n.toString() String(n)
	var digits = str.length
	var sum = 0
	for (var i = 0; i < str.length; i++) {
		sum += Number(str[i]) ** digits
	}
	return sum === n
}