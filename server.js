// const fs = require('fs');

// async function someAsyncOperation(callback) {
//     // Assume this takes 95ms to complete
//     await fs.readFile('./index.txt', 'utf8', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//     const delay = Date.now() - timeoutScheduled;
//     console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation((err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     const startCallback = Date.now();
//     console.log(":: file data ::", data);
//     // do something that will take 10ms...
//     console.log(":: logging in 10ms ::" + startCallback);
//     while (Date.now() - startCallback < 10) {
//         // do nothing
//         console.log("::Date.now() - startCallback < 10 ::" + Date.now() - startCallback < 10)
//     }
// });




const arr = [6, 1, 2, 5, 4];
const n = arr.length;
for (let i = 0; i < n; i++) {
    let resultant = arr[i];
    for (let j = 0; j < n; j++) {
        if (i == j) {
            // console.log("i == j", true);
            continue;
        } else {
            for (let k = 0; k < n; k++) {
                if (i == j || j == k || i == k) {

                } else {
                    let sumofTwoPlanks = arr[j] + arr[k];
                    if (resultant == sumofTwoPlanks) {
                        console.log("the possiblities elements = ", arr[j], arr[k]);
                    } else {
                        // console.log("No");
                    }
                }
            }
        }
    }
}