class Node {
   constructor(value){
      this.value =  value;
      this.next = null;
   }
}

class Queue{
   constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
   }

   peak(){
      if (this.isEmpty()) {
         return null;
      }
      return this.first.value;
   }

   enqueue(value){
      const newNode = new Node(value);
      if (this.isEmpty()) {
         this.first = newNode;
         this.last = newNode;
      }else{
         this.last.next = newNode;
         this.last = newNode;
      }
      this.length++;
   }


   dequeue(value){
      if (this.isEmpty()) {
         return null;
      }

      this.first = this.first.next;
      this.length--;
      return this;
   }

   isEmpty(){
     return this.length === 0;
   }
}


const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.dequeue();
console.log(myQueue.peak());

console.log(myQueue);