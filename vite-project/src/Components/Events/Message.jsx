import React from 'react'

function Message() {
    function sayHello(){
        console.log('Hello');
    }
  return (
    <div>
      <button onClick={sayHello}>click me</button>
    </div>
  )
}

export default Message
