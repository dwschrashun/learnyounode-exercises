var terms = process.argv.slice(2);
var sum = 0;
terms.forEach(function(num) {
	sum += num * 1;
});
console.log(sum);