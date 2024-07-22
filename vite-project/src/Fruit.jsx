import React from 'react'

const Fruit = ({name , price}) => {
  return (
    <div>
      <li key={name}>
        {price >100 ? <h3>The price of {name} is {price}</h3> : " No fruits " }
        
      </li>
    </div>
  )
}

export default Fruit
