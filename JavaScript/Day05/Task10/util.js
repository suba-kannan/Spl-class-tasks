const totalMarks = (...marks)=>{

    let total = 0
    for(let mark of marks){
        total+=mark
    }
    return total

}


export default totalMarks