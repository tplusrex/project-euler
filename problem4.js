// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palin( num1, num2 ){
  var max = num1 * num2;
  var match;
  var list = [];
  var magic;
  
  while( max-- ){
    match = max.toString();
    list = match.split('');
    
    if( list.length === 6 ) {
      if( list[0] === list[5] && list[1] === list[4] && list[2] === list[3] ) {
        magic = list.join('');
        break;
      }
    }
    else if ( list.length === 5 ) {
      if( list[0] === list[4] && list[1] === list[3]) {
        magic = list.join('');
        break;
      }
    }
  }

  return magic;
}

console.log( palin(222,323) );