
function sumMultiple( goal ) {
	var total = 0;
	var count = 1;

	while( count <= goal ) {
		if( count % 3 === 0 || count % 5 === 0 ) {
			total += count;
		}
		count++;
	}
	return total;
}

console.log( sumMultiple(10) );