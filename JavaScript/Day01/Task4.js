// iterate values from an object using for in

// const tasks = {
//     name: "MERN Stack",
//     timing: "10-5",
//     topic: "JavaScript, Job search",
//     days:30
// }

// for(let item in tasks){
//     console.log(item,tasks[item]);
    
// }

//Nested loop


const tasks = {
    name: "MERN Stack",
    timing: {
        morning:"10-11 AM",
        afternoon:"1-2 PM",
        evening:"5-6 PM"
    },
    topic: "JavaScript, Job search",
    days:30
}

for(let item in tasks){


    if(typeof tasks[item] === "object"){
        for(let nestedItem in tasks[item]){
            console.log(nestedItem,tasks[item][nestedItem]);
        }
    }else{
        
        console.log(item,tasks[item])
    }
    
}