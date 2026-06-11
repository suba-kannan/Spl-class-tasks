const users = [ 
    { id: 1, name: "Sudhan" }, 
    { id: 2, name: "Kumar" }, 
    { id: 3, name: "Ravi" } 
]

const findId = users.find(user=> user.id===2)

console.log(findId.id, "-", findId.name);