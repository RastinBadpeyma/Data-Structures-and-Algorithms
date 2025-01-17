const reverse = (str: string): string => {
   // Check if the input is valid: 
   // Return the input as-is if it's empty, not a string, or has less than 2 characters.
   if (!str || typeof str !== 'string' || str.length < 2) return str;

   // Initialize an empty array to store characters in reverse order.
   const backwards: string[] = [];

   // Calculate the index of the last character in the string.
   const totalItems: number = str.length - 1;

   // Loop through the string from the last character to the first.
   for(let i = totalItems; i>=0 ; i--){
       // Add the current character to the `backwards` array.
       backwards.push(str[i]);
   }

   // Join the reversed array into a single string and return it.
   return backwards.join('');
};


const reverse2 = (str: string): string => str.split('').reverse().join('');


const reverse3 = (str: string): string => [...str].reverse().join('');


console.log(reverse('Data Structures'));
console.log(reverse2('Rastin'));
console.log(reverse3('Badpeyma'));




