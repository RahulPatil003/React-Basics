import React from 'react'
import Hello from './hello'
import Animals from './Animals';
import Fruits from './Fruits';
import Message from './Components/Events/Message';
import Counter from './Components/Events/Counter';
const App = () => {
  const seats = ['1','2','3',];
  return (

    <div>
      <Hello seats/>
      <Animals />
      <Fruits />
      <Message />
      <Counter />
    </div>
  )
}

export default App
