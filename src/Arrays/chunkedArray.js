const chunk = (array , size) => {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i+=size) {
   chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}


const chunk2 = (array , size) => {
   const chunkedArray = [];
   let index = 0;
 
   while ( index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index+=size;
   }
   return chunkedArray;
 }

const sampleArray = ["one" , "two" , "three" , "four"];
console.log(chunk(sampleArray , 3));

const list = ["red" , "blue" , "black" , "white"];
console.log(chunk2(list , 2));