// Rule 2 : Remove constants

function printFirstItemThenFirstHalfThenSayHi100Times(items: string[]) {
   console.log(items[0]);

   var middleIndex = Math.floor(items.length / 2);
   var index: number = 0;

   while (index < middleIndex) {
       console.log(items[index]);
       index++;
   }

   for (var i = 0; i < 100; i++) {
       console.log('hi');
   }
}

