//Exercise 1
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
// For Exercise 3
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

// For Exercise 4 
let ex4 = () => {
    const a=document.getElementById('a41').value;
    const b=document.getElementById('b41').value;
    let inputString = document.getElementById('c4').value;
    let n = inputString.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    let sum = f4(a,b,n);
    alert("The sum of all multiples of " + a + " or " + b + " below " + n + " is: " + sum);
    document.getElementById('result4_1').textContent = "The sum of unique multiples of " + a + " or " + b + " within " + n + " is: " + sum;
}


function f4(a,b,n){
    let d=0;
    for (let i=1;i<n.length;i++){
      if ((n[i]%a===0 || n[i]%b===0)){
        console.log(i);
        d+=n[i];
        }
      }
    console.log(d);
    return d;
}
// For Exercise 5 

let ex5 = () => {
    let inputStringA = document.getElementById('a5').value;
    let a = inputStringA.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    let inputStringL = document.getElementById('l5').value;
    let n = inputStringL.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    let d =f5(a,n);
    console.log(d);
    if (d === 0) {
        alert("Please enter a 2 digit array of numbers.");
    }
    else {
        alert("The sum of all unique multiples of " + a + " within the array [" + n.join(", ") + "] is: " + d);
        document.getElementById('result5_1').textContent = "The sum of unique multiples of " + a + " within the array [" + n.join(", ") + "] is: " + d + "(without duplicate)";
    }    
}
function f5(a,n){
    if (a.length > 2 || a.length == 1 || a.some(isNaN)) {
        return 0; 
    }
    else {
        let d=0;
        let newarray = []; //for tracking added numbers
        for (let i=0;i<n.length;i++){
            for(let j=0;j<a.length;j++){
                if (n[i]%a[j]===0 && !newarray.includes(n[i])){
                    console.log(n[i]);
                    d+=n[i];
                    newarray.push(n[i]);
                    break
                }
            }
        }
        console.log(newarray);
        //console.log(d);
        return d;    
    }
}

// For Exercise 6
let ex6 = () => {
    let inputStringA = document.getElementById('a6').value;
    let a = inputStringA.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    let inputStringL = document.getElementById('l6').value;
    let n = inputStringL.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
    let d =f6(a,n);
}
function f6(a,n){
    let d=0;
    let newarray = []; //for tracking added numbers
    for (let i=0;i<n.length;i++){
        for(let j=0;j<a.length;j++){
            if (n[i]%a[j]===0 /* && !newarray.includes(n[i]) */){
                console.log(n[i]);
                d+=n[i];
                //newarray.push(n[i]);
                break
            }
        }
    }
    console.log(d);
    return d;
}    
