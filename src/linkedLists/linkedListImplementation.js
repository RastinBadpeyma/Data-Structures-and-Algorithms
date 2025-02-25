class linkedList{
   constructor(value){
     this.head = {
     value : value,
     next : null
     }
     this.tail = this.head;
     this.length = 1;
   }

   append(value){
      const newNode = {
         value : value,
         next : null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
   }
   prepend(value){
      const newNode = {
         value: value,
         next: null,
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   printList() {
     
      let array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      console.log("linkedList:", array.join(" → "));
  }


  insert(index ,value){
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value:value,
      index:null,
    }

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  traverseToIndex(index){
   let start = 0;
   let currentNode = this.head;
   while(start !== index){
      currentNode = currentNode.next;
      start++
   }
   return currentNode;
  }

  remove(index){
   const leader =  this.traverseToIndex(index-1);
   const indexx = leader.next;
   leader.next = indexx.next;
   this.length--;
   return this;
   
  }


}
const mylinkedList = new linkedList(10);
mylinkedList.append(20);
mylinkedList.append(30);
mylinkedList.append(40);
mylinkedList.append(50);
mylinkedList.prepend(1);
mylinkedList.insert(2,22);
mylinkedList.remove(3);
console.log(mylinkedList);
mylinkedList.printList();