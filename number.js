/*
- console.log an array of numbers from 1 to 100.
- any number divisable by 3 is to be printed w/ "Fizz"
- any number divisable by 5 is to be printed w/ "Buzz"
- any number divisable by 3 AND 5 is to be printed w/ "FizzBuzz"
*/

for(var i = 1; i <= 100; i++){
  var num = i;
  var msg = "";
  
  if(num % 5 == 0 && num % 3 == 0){
  msg = "FizzBuzz";
  }else if(num % 5 == 0){
  msg = "Fizz";
  }else if(num % 3 == 0){
  msg = "Buzz";
  }else{
  msg = num;
  }
 console.log(msg);
}