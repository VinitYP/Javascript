//  Big O(n):
//  This function runs in O(n) time (or "linear time"), where n is the number of items in the array. If the array has 10 items, we have to print 10 times. 
//  If it has 1000 items, we have to print 1000 times.

// Example:

const items = ['hello'];

const large = new Array(100).fill('hello');
function printItems(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]==='hello') {
      console.log("Item find");
    }
  }
}
printItems(large);  // O(n) --> linear time (1 input 1 operation "line number 7 example "| 100 input 100 operation
                    // | n input n operation means that linearly incremented )


