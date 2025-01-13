const strings: string[] = ['a','b','c','d'];


//push
strings.push('f'); //O(1)

 //pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2,0,''); //O(n/2) => O(n)

console.log(strings);




