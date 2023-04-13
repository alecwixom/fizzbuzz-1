// for (x = 0; x <= 50; x ++) {
//         console.log(x, x % 15 ? "Fizz Buzz" : x % 5 === 0 ? "Buzz" : x % 3 === 0 ? "Fizz" : "null");
// }

for (let i =1; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0){
                console.log("fizzbuzz");
        }else if(i % 3 === 0){
                console.log("fizz");
        }else if(i % 5 === 0){
                console.log("buzz");
        }else {
                console.log(i);
        }
}