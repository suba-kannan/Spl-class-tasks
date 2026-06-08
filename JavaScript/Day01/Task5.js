// iterate array
//forEach

const course = ["JS","React","Node","Express","MongoDB"]

course.forEach((value,i)=>{
    console.log(i, value);
    
})


//Map

const numbers = [1,2,3,4,4]

const result = numbers.map((num)=>{
    return num*2
})

console.log("Map:", result);
