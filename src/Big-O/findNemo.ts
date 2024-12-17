//Rule 1 : worst case 

const everyone : string[] = ['dory' , 'bruce' , 'marlin' , 
'gill' , 'bloat' , 'nigel', 'nemo'];


function findNemo(array :string[]): void {
   for(let i = 0; i < array.length; i++){
      console.log('running');
      if (array[i] === 'nemo') {
         console.log('Found NEMO!');
      }
   }
}

findNemo(everyone);