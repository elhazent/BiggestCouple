function biggestCouple(num) {
	var number = String(num).split('');
	var numbers = [];
	for (var i = 0; i < number.length; i++) {
		numbers[i] = number[i] + number[i + 1];
	}
	var digit = numbers[0];
	for (var j = 1; j < numbers.length; j++){
		if (numbers[j] > digit){
			digit = numbers[j]
		}
	}
	return digit;
}

console.log(biggestCouple(641573)); // 73
console.log(biggestCouple(12783456)); // 83
console.log(biggestCouple(910233)); // 91
console.log(biggestCouple(71856421)); // 85
console.log(biggestCouple(79918293)); // 99
