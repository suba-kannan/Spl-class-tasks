import students from './student.js'
import totalMarks from './util.js'


const displayAll=()=>{
    students.map((item)=>{
        console.log(`Name:${item.name}`);
        
    })

}
displayAll()
console.log(totalMarks(20,30,40,50,60));
