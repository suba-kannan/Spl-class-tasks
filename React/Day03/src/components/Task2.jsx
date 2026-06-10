import React, { useState } from 'react'

const Task2 = () => {
    const [products,setProduct] = useState([
        {id:1,name:"Note", price:50},
        {id:2,name:"Pen", price:20},
        {id:3,name:"Paper", price:10},
        {id:4,name:"Ink", price:35},
        {id:5,name:"Pencil", price:5},
    ])

    const [search,setSearch] = useState("")


    const filteredProducts= products.filter((product)=>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <>
    <h1>Task 2</h1>
    <h2>Product Search System</h2>
        <input type="text" placeholder='search product' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    {filteredProducts.length===0?(
        <p>No products found</p>
    ):(
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product)=>(
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-3">₹{product.price}</p>
            </div>

        ))}
        </div>
    )}
    </>
  )
}

export default Task2