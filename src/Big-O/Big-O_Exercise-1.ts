function funChallenge(input:any[]): number {
  let a: number = 10; //O(1)
  a = 50 + 3;  //O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
     anotherfunction();  //O(n)
     let stranger: boolean = true;  //O(n)
     i++;  //O(n)
  }
  return a;  //O(1)
}


function anotherfunction(): void {
   // code
}


