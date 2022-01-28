# Reverse a String with a Stack

For implementing the stack, I am using a class-based approach. In order to store the data in the stack, I am using the constructor method to create and initialize the stack. The `data` variable will hold elements to our stack.

I am using the following methods inside the stack:
- `push()` - used to add an element to the stack;
- `pop()` - used to remove and return the last element of the stack;
- `isEmpty()` - used to check if the stack is empty; returns true or false.

In order to reverse a string, I created the `reverseString` function. The function takes one parameter, the string, and it returns the reversed string.

When running the function, each character from the string will be pushed to the stack. After that, each character (starting with the last character) from the stack will be popped out from the stack to a new string called reversed, until the stack is empty.
Then, the function will return the reversed string.
