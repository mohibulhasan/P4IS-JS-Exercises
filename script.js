let c=()=>{
    let i=document.getElementById('in').value
    if (i>15){
        alert("Over weight!");
    }
}
let sum=()=>{
    let a=0;
    let b=document.getElementById('in2').value;
    for (let i=1;i<b;i++){
        if (i%3===0 || i%5===0){
          a+=i;
        }
    }
    console.log(a);
    alert("The result is: " + a);
    document.getElementById('result').textContent = "The sum of multiples of 3 or 5 up to "+ b +" is: " + a;
}

function sum3() {
    let d = 0;
    const a=document.getElementById('an').value;
    const b=document.getElementById('bn').value;
    const n=document.getElementById('in3').value;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            d += i;
        }
    }
    console.log(d);
    alert("The sum of all multiples of " + a + " or " + b + " below " + n + " is: " + d);
    document.getElementById('result3').textContent = ("The sum of multiples of " + a + " or " + b + " up to " + n + " is: " + d);
}