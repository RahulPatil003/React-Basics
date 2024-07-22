import React from 'react'
import Fruit from './Fruit'

const Fruits = () => {
    let fruits = [{name: 'apple', price : 180},{name: 'mango', price : 200},{name: 'banana', price : 120},{name: 'Pineapple', price : 200}]
  return (
    <div>
      {fruits.map((fruit)=> (
        // <li key={fruit.name}> {fruit.name } - {fruit.price}Rs</li>
        <Fruit name={fruit.name} price={fruit.price}/>
      ))}
    </div>
  )
}

export default Fruits
