//String Manipulation Functions:
     //1. Reverse String
     function revers(str) {
         let reversed = ''; 

         for (let i = str.length - 1; i >= 0; i--) {
         reversed += str[i]; 
         }

         return reversed; 
         }

         console.log(revers("hello")); 

      //2. Compter caractere
     function count(str) {
          return str.length;
         }
         console.log(count("hello")); 

     // 3. les mots en majuscule
         function capitalized(sentence) {
         let words = sentence.split(' '); 
         for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
          }
          return words.join(' ');
          }
          console.log(capitalized("hello world")); 

//Array Functions:

      //1. Max
      function Max(arr) {
          let max = arr[0];
         for (let i = 1; i < arr.length; i++) { 
            if (arr[i] > max) { 
                max = arr[i]; 
            }
         }
         return max; 
     }
            console.log(Max([1, 5, 3, 9, 2])); 
     

     //Min
     function findMin(arr) {
        let min = arr[0]; 
        for (let i = 1; i < arr.length; i++) { 
            if (arr[i] < min) { 
                min = arr[i]; 
            }
        }
        return min; 
     }
     console.log(findMin([1, 5, 3, 9, 2]));


     // 3. Somme 
     function filter(arr, condition) {
        let result = []; 
        for (let i = 0; i < arr.length; i++) { 
            if (condition(arr[i])) { 
                result.push(arr[i]); 
            }
        }
        return result; 
    }
    console.log(filter([1, 2, 3, 4, 5], function(num) { return num % 2 === 0; })); 
    
// Mathematical Functions:

    //1. factorial

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1; 
        }
    
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i; 
        }
        return result;
    }

    console.log(factorial(5));
    console.log(factorial(0)); 
    
   //2. Nombre est Premier
   function Prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
console.log(Prime(5));  
console.log(Prime(10)); 
console.log(Prime(2));  
   //3. Fibonacci Sequence
   function fibonacci(n) {
    let fibSequence = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); 
    }

    return fibSequence.slice(0, n); 
}
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 

