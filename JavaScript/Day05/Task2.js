// const totalMarks = (...marks)=>{
//     let total = 0

//     for(let mark of marks){
//         total+=mark
//     }
//     return total

// }

// console.log(totalMarks(80, 90, 70, 60))


const totalMarks =(...marks)=>{

    let total = 0

    for (let i=0; i<marks.length;i++){
        total+=marks[i]
    }
    return total
}
console.log(totalMarks(80, 90, 70, 60))