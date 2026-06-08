// Pass another function as an argument

//Calculate
const Calculate = (a,b,cb)=>{

    return cb(a,b)
}
const add = (num1,num2)=>num1+num2
const sub = (num1,num2)=>num1-num2
const mul = (num1,num2)=>num1*num2
const div = (num1,num2)=>num1/num2

console.log(Calculate(11,2,add));
console.log(Calculate(10,2,sub));
console.log(Calculate(10,2,mul));
console.log(Calculate(10,2,div));

