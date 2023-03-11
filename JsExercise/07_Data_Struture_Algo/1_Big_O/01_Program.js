// Program fro finding how much time it takes to execute
// fro calulating the how much time its take to execute we use performance function - line 7;

const nemo = ['nemo'];

function findnemo(array) {
    let t1 = performance.now(); // calculating time from here 
    for (let i = 0; i < array.length; i++) {
        if (array[i] =="nemo") {
            console.log("Find nemo !" );
        }
    }
    let t2 = performance.now(); // time end here
    console.log("Time taken to find nemo : " + (t2 - t1) + " ms"); // time will be dependent on cpu performance also
}

findnemo(nemo);

//TODO: Yoc can modify array like with 100 or it could be 10000 input so you get more time to execute function
// example like this : By creating new large array 
/*
            let large = new array(100).fill('hello world');  here you can change the size of the array to something 10000 for better understanding
                for (let i = 0; i < array.length; i++) {
                    if (array[i] =="nemo") {
                         console.log("Find nemo !" );
                     }
                }
            let t2 = performance.now(); // time end here
            console.log("Time taken to find nemo : " + (t2 - t1) + " ms");
*/
 