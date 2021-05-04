function capitalize(str){
	var strTemp = ''
	var result = ''
	for(var i = 1; i < str.length; i++) {
		strTemp += str[i]
	}	

	result = str[0].toUpperCase() + strTemp

	return result
}


capitalize('nick')
capitalize('Nick')
capitalize(',hello')
