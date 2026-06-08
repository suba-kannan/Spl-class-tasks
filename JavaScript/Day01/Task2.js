//Callback function

const CallbackFunction = (num,cb) =>{
    return cb(num)
}

const calculate = num=>num*num
console.log(CallbackFunction(5,calculate));
