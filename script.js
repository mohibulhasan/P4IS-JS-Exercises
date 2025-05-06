let c = () => {
    let i = document.getElementById('in').value
    if (i > 15) {
        alert("Over weight!");
    }
}
// For Exercise 2
let sum = () => {
    let a = 0;
    let b = 1000;
    for (let i = 1; i < b; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            a += i;
        }
    }
    console.log(a);
    alert("The result is: " + a);
    document.getElementById('result').textContent = "The sum of multiples of 3 or 5 up to " + b + " is: " + a;
}

let abn = () => {
    const a = document.getElementById('an').value;
    const b = document.getElementById('bn').value;
    const n = document.getElementById('in3').value;
    alert("The sum of all multiples of " + a + " or " + b + " below " + n + " is: " + sum3(a, b, n));
    document.getElementById('result3').textContent = ("The sum of multiples of " + a + " or " + b + " up to " + n + " is: " + sum3(a, b, n));
}
    
let sum3 = (a,b,n) => {
    let d = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            d += i;
        }
    }
    console.log(d);
    return d;

}

function sum4(){
    let d=0;
    const a=document.getElementById('a4').value;
    const b=document.getElementById('b4').value;
    const n=[2,4,6,7,8,9,14,23,25,26,27,80,60,9,25];
    const newarray = []; //for tracking added numbers
    for (let i=0;i<n.length;i++){
      if ((n[i]%a===0 || n[i]%b===0) && !newarray.includes(n[i])){
        console.log(n[i]);
        d+=n[i];
        newarray.push(n[i]);
        }
      }
    console.log(d);
    alert("The sum of all unique multiples of " + a + " or " + b + " within the array [" + n.join(", ") + "] is: " + d);
    document.getElementById('result4').textContent = "The sum of unique multiples of " + a + " or " + b + " within the array [" + n.join(", ") + "] is: " + d + "(without duplicate)";
  }

function f4(){
    let d=0;
    const a=document.getElementById('a41').value;
    const b=document.getElementById('b41').value;
    const n = document.getElementById('c4').value;
    for (let i=1;i<n;i++){
      if ((i%a===0 || i%b===0)){
        console.log(i);
        d+=i;
        }
      }
    console.log(d);
    alert("The sum of all multiples of " + a + " or " + b + " below " + n + " is: " + d);
    document.getElementById('result4_1').textContent = "The sum of unique multiples of " + a + " or " + b + " within " + n + " is: " + d;
}

function sum5_1(){
    let d=0;
    const a=document.getElementById('a5').value;
    const b=document.getElementById('b5').value;
    const inputString = document.getElementById('arrayInput').value;
    const n = inputString.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    const newarray = []; //for tracking added numbers
    for (let i=0;i<n.length;i++){
        if ((n[i]%a===0 || n[i]%b===0) && !newarray.includes(n[i])){
            console.log(n[i]);
            d+=n[i];
            newarray.push(n[i]);
            }
        }
    console.log(d);
    alert("The sum of all unique multiples of " + a + " or " + b + " within the array [" + n.join(", ") + "] is: " + d);
    document.getElementById('result5_1').textContent = "The sum of unique multiples of " + a + " or " + b + " within the array [" + n.join(", ") + "] is: " + d + "(without duplicate)";
}
