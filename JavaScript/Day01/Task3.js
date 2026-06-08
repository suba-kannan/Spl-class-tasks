//Closure function

const Count = ()=>{
    let count = 0;
    return ()=>{
        count ++
        console.log(count);
    }
}

const counter = Count()

counter()
counter()
counter()

