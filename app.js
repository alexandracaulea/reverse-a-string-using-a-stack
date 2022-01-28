class Stack {
  constructor() {
    this.data = [];
  }
  push(element) {
    this.data.push(element);
  }
  pop() {
    return this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

function reverseString(string) {
  const stack = new Stack();
  let reversed = "";

  for (let elem of string) {
    stack.push(elem);
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

console.log(reverseString("abcdefg"));
console.log(reverseString("javascript"));
console.log(reverseString("reversed"));
