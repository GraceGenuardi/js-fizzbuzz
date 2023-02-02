console.log('IN LOOP!')


let number


//1- Scrivi e stampa in colsole i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
//4-Per i numeri che sono sia multipli di 3 che di 5 stampa "FizzBuzz"         
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
//2- Per i multipli di 3 stampa “Fizz” al posto del numero        
      console.log("Fizz");
    } else if (i % 5 === 0) {
 //3- Per i multipli di 5 stampa “Buzz” al posto del numero       
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }










