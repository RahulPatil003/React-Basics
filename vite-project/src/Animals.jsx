import React from 'react'

const Animals = () => {
    let animals = ['camel','dog','cat']
  return (
    <div>
        <ul>
            
        { animals.map((animal) => ( 
            <li key={animal}>{animal}</li>
        ))}
        </ul>
    </div>

  )
}


export default Animals
