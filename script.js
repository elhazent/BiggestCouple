
function pasanganTerkuat(num) {
	var no = String(num).split('');
	var bilangan = [];
	for (var i = 0; i < no.length; i++) {
		bilangan[i] = no[i] + no[i + 1];
	}
	var digit = bilangan[0];
	for (var j = 1; j < bilangan.length; j++){
		if (bilangan[j] > digit){
			digit = bilangan[j]
		}
	}
	return digit;
}
console.log(pasanganTerkuat(641573)); // 73
console.log(pasanganTerkuat(12783456)); // 83
console.log(pasanganTerkuat(910233)); // 91
console.log(pasanganTerkuat(71856421)); // 85
console.log(pasanganTerkuat(79918293)); // 99
