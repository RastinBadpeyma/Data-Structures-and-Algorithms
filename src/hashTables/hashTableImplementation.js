class HashTable {
   /**
    * Constructor: Initializes the hash table with a given size.
    * @param {number} size - The size of the hash table.
    */
   constructor(size) {
       this.data = new Array(size); // Create an array of given size
   }



   /**
    * Generates a hash code for a given key.
    * TODO:
    * 1. Initialize hash variable to 0.
    * 2. Loop through each character of the key.
    * 3. Calculate the hash value using character codes and modulo operation.
    * 4. Return the computed hash.
    */
   _hash(key) {
       let hash = 0;
       for (let i = 0; i < key.length; i++) {
           hash = (hash + key.charCodeAt(i) * i) % this.data.length;
       }
       console.log(`Hash for "${key}" → ${hash}`);
       return hash;
   }




   /**
    * Inserts a key-value pair into the hash table.
    * TODO:
    * 1. Generate hash (index) using the key.
    * 2. If the bucket at the index is empty, initialize it as an array.
    * 3. Store the key-value pair in the bucket.
    * 4. Log the operation.
    */
   set(key, value) {
       let address = this._hash(key);
       if (!this.data[address]) {
           this.data[address] = []; // Initialize bucket if empty
       }
       this.data[address].push([key, value]);
       console.log(`Set: ${key} → ${value} at index ${address}`);
   }



   /**
    * Retrieves the value associated with a given key.
    * TODO:
    * 1. Generate hash (index) using the key.
    * 2. Retrieve the bucket at the index.
    * 3. Search for the key in the bucket.
    * 4. If found, return the associated value.
    * 5. If not found, return undefined.
    */
   get(key) {
       let address = this._hash(key);
       const currentBucket = this.data[address];
       if (currentBucket) {
           for (let i = 0; i < currentBucket.length; i++) {
               if (currentBucket[i][0] === key) {
                   console.log(`Get: Found ${key} → ${currentBucket[i][1]} at index ${address}`);
                   return currentBucket[i][1];
               }
           }
       }
       console.log(`Get: ${key} not found`);
       return undefined;
   }




   /**
     * Deletes a key-value pair from the hash table.
     * TODO:
     * 1. Generate hash (index) using the key.
     * 2. Retrieve the bucket at the index.
     * 3. Search for the key in the bucket.
     * 4. If found, remove the key-value pair and return it.
     * 5. If not found, return undefined.
     */
   delete(key) {
      let address = this._hash(key);
      const currentBucket = this.data[address];
      if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
              if (currentBucket[i][0] === key) {
                  console.log(`Delete: Removed ${key} from index ${address}`);
                  return currentBucket.splice(i, 1); // Remove key-value pair
              }
          }
      }
      console.log(`Delete: ${key} not found`);
      return undefined;
  }




  /**
   * Displays the current state of the hash table.
   * TODO:
   * 1. Print the hash table contents to the console.
   */
  display() {
      console.log("\n📌 **Current Hash Table State:**");
      console.log(this.data);
  }

/** 
  * TODO:
  * 1. Initialize an empty array called `keysArray` to store the keys.
  * 2. Flatten the nested data structure into a single-level array using the `flat()` method.
  * 3. Iterate over each entry in the flattened array.
  * 4. Push the first element of each entry (the key) into the `keysArray`.
  * 5. Return the `keysArray` containing all the extracted keys.
*/
  keys() {
   const keysArray = [];
   const flatData = this.data.flat();
   // console.log(flatData);

   flatData.forEach(entry => keysArray.push(entry[0]));

   return keysArray;
}

}


const myHashTable = new HashTable(10);
myHashTable.set("apple", 100);
myHashTable.set("banana", 50);
myHashTable.set("orange", 200);
myHashTable.get("apple");
myHashTable.get("banana");
myHashTable.delete("banana");
myHashTable.display();
console.log(myHashTable.keys());