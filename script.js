function biggestCouple(num) {
	var number = String(num).split('');
	var angka = [];
	for (var i = 0; i < number.length; i++) {
		angka[i] = number[i] + number[i + 1];
	}
	var digit = angka[0];
	for (var j = 1; j < angka.length; j++){
		if (angka[j] > digit){
			digit = angka[j]
		}
	}
	return digit;
}

console.log(biggestCouple(641573)); 
console.log(biggestCouple(12783456));
console.log(biggestCouple(910233));
console.log(biggestCouple(71856421));
console.log(biggestCouple(79918293));
