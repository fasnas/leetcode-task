// Q. Find the largest number using a for loop ?
// 	Example :- [3,5,6,7,4,9] → Output :- 9

let a = [3, 5, 1, 7, 10, 9];

function sample(a) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > count) {
      count = a[i];
    }
  }

  for (j = 0; j < a.length; j++) {
    if (a[j] > res && a[j] < count ) {
      res = a[j];
    }
  }
  return res;
}

console.log(sample(a));


// git add .
// git commit -m"commit message enter here" 
//  git push origin main

