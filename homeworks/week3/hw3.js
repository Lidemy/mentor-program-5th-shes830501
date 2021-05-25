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
	var len = Number(lines[0])
	console.log(len)
	for( var i = 1 ; i < len + 1 ; i++){
		var num = Number(lines[i])
		console.log('num:', num)
		var is_composite = false
		for( var j = 2; j < num; j++) {
        	if(num % j == 0){
        		if (is_composite == false) {
        			console.log("Composite")
            		is_composite = true
        		}
        	}
    	}
    	if (num == 1) console.log('Composite')

    	else if (is_composite == false) {
        	console.log("Prime")
    	}
	}
}


solve(['10', '1', '2', '3', '4', '5', '9' ,'81', '10', '19', '56'])
