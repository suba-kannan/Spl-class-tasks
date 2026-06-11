const students = [ 
    { id: 1, name: "Arun", mark: 85 }, 
    { id: 2, name: "Karthik", mark: 45 }, 
    { id: 3, name: "Vijay", mark: 92 }, 
    { id: 4, name: "Ajay", mark: 35 } 
]

console.log("Map")
students.map((student)=>{
    console.log("Name:",student.name," - Mark:",student.mark)
})

console.log("Filter");
const filterMark = students.filter((student)=>student.mark>=50)

filterMark.forEach((student)=>{
    console.log("Name:",student.name," - Mark:",student.mark);
})

console.log("Find")
const findId = students.find((student)=>student.id===3)
console.log(findId);

console.log("Reduce Total");
const totalMarks = students.reduce((acc,num)=>acc+num.mark,0)
console.log("Total Marks:",totalMarks);

console.log("Reduce Avg");
const average = totalMarks/students.length
console.log("Average:",average);
