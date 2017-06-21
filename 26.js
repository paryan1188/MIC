function sum(a,b) {
	let s = 0;
	let d = 0;
	let i = 0;
	while(a && b) {
		let c = a % 10 + b % 10 + d;
		s += c % 10 * Math.pow(10,i++);
		d = parseInt(c / 10);
		a = parseInt(a / 10);
		b = parseInt(b / 10);
	}
  s += a * Math.pow(10,i) + b * Math.pow(10,i);
  return s;
}
console.log(sum(123,45678));

function sub(a,b) {
	let s = 0;
	let d = 0;
	let i = 0;
	while(a && b) {
		let c = a % 10 - b % 10;
		if( c < 0 ) {
			d = 1;			
		}
		s += (c + d * 10) * Math.pow(10,i++);
		a = parseInt(a / 10) - d;
		b = parseInt(b / 10);
		d = 0;
	}
  s += a * Math.pow(10,i) - b * Math.pow(10,i);
  return s;
}
console.log(sub(123,45));


