
function fibList(limit) {
  var fib = [0,1];
  var count = 0;
  
    while(count < limit){
      fib.push( fib[count] + fib[count + 1] );
      count++;
    }
  
  return sumEven(fib);
}

function sumEven(list) {
  var sum = 0;
  var count = 0;
    
    while(count <= list.length) {
      if(list[count]%2 === 0){
        sum += list[count];
      }
      count++;
    }
  
  return sum;
}

console.log(fibList(4000000));
