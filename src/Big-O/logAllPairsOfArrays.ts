
const boxes: string[] = ['a' , 'b' , 'c' , 'd' , 'e'];

function logAllPairsOfArrays(array: string[]){
   for(let i = 0 ; i < array.length; i++){
      for(let j = 0 ; j < array.length; j++){
          console.log(array[i] , array[j]);
      }
   }
}

logAllPairsOfArrays(boxes);

// O(n^2)