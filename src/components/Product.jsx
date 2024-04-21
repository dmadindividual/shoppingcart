import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import {add} from '../store/cartSlice'
import { NavItem } from "react-bootstrap"

const Product = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(data=>
      data.json()
    ).then((data)=>{
      setProducts(data)
    })

  }, [])

const Add = (item)=>{
  dispatch(add(item))
}







  return (
    <div className=" mt-10 ">
    <div className="flex flex-wrap gap-11 justify-center">
  

  {products.map((item, index)=>(
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden h-3/4" key={index}>
    <img className="w-full h-auto" src={item.image} alt="Product Image"/>
    <div className="p-4">
      <h3 className="text-gray-900 font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold text-xl">${item.price}</span>
        <button onClick={()=> Add(item)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add To Cart</button>
      </div>
    </div>
  </div>
  
  ))}

    </div>
    </div>





  )
}

export default Product