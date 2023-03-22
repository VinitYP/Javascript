// Big O(n^2) example
// Program of alphabetic pairing example 

const letters = ['a', 'b', 'c', 'd', 'e'];

function printpair(array){
    for (let i = 0; i < array.length; i++) {                 //O(n)
        for (let j = 0; j < array.length; j++) {             //O(n)
            console.log(array[i],array[j])
        }
    }
};
printpair(letters);

// Big O (n * n) == Big O(n^2)  ( * for inside loops)