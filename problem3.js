// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143
  

function findHighestPrime( num ) {
  var max = Math.sqrt( num );
  var i = 3;
  var list = [];
  var total = 1;
  
  while( i < max ) {
      if( prime%i === 0 ){
        list.push(i);
        
        total = total * i;
        if( total === num ){
          i = max;
        }
      }
    i+=2;
  }
  
  return list;
}

console.log( findHighestPrime(600851475143) );