class DoublyLinkedList{
   constructor(value){
      this.head = {
         data: value,
         prev: null,
         next: null,
      }
      this.tail = this.head;
      this.length = 1;
   }

   append(value){
      const newNode = {
         data: value,
         prev: null,
         next: null,
      }
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }

    prepend(value){
      const newNode = {
         data: value,
         prev: null,
         next: null,
      }
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    } 

     
    insert(index,value){
      //Check for proper parameters;
      if (index >= this.length) {
         return this.append(value);
       }
   
       const newNode = {
         data: value,
         prev: null,
         next: null,
       };
       const leader = this.traverseToIndex(index - 1);
       const follower = leader.next;
       leader.next = newNode;
       newNode.prev = leader;
       newNode.next = follower;
       follower.prev = newNode;
       this.length++;
       return this;
     
   }
     
   remove(index){
      const leader =  this.traverseToIndex(index-1);
      const removenode = leader.next;
      leader.next = removenode.next;
      this.length--;
      return this;
   }


   traverseToIndex(index){
      let start = 0;
      let currentNode = this.head;

      while(start !== index){
         currentNode = currentNode.next;
         start++;
      }
      return currentNode;
   }


   PrintList() {
      let array = [];
      let currentNode = this.head;
   
      while(currentNode !== null){
         array.push(currentNode.data);
         currentNode = currentNode.next;
      }
      console.log("list:" , array.join('<->'));
   }

 
   
}

const mydoublylinkedList = new DoublyLinkedList(10);
mydoublylinkedList.append(5);
mydoublylinkedList.append(16);
mydoublylinkedList.prepend(1);
mydoublylinkedList.insert(1,6)
console.log(mydoublylinkedList);
mydoublylinkedList.PrintList();



