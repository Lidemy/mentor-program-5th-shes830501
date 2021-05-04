function reverse(str) {
	var strReverse = ''
	for (var i = str.length - 1; i >= 0; i--) { 
		strReverse += str[i]
	}
	console.log(strReverse)
}


reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')