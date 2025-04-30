// Add to Array-Form of Integer

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234


let num = [1,2,0,0]
let k = 3077


function sample(num,k){
    let a=num.join("")
    let res=Number(a)+k
    return res
}

console.log(sample(num,k))