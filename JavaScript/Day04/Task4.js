const cart = [ 
    { product: "Laptop", price: 50000 }, 
    { product: "Mouse", price: 500 }, 
    { product: "Keyboard", price: 1500 } 
]

const totalPrice = cart.reduce((acc,num)=> acc+num.price,0)

console.log("Total Price:",totalPrice);
