function join(arr, concatStr) {
	var result = ''
	for (var i = 0; i < arr.length; i++ ){
		if ( i === arr.length - 1) {
			result = result + arr[i]
		} else {
			result = result + arr[i] + concatStr
		}
	}
	return result
}


console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))


function repeat(str, times) {
	var result = ''
	for (var i = 1; i <= times; i++){
		result += str
	}
	return result
}


console.log(repeat('a', 5))
console.log(repeat('yoyo', 2))
