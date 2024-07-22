import React from 'react'
import Hello from './hello'
import Animals from './Animals';
const App = () => {
  const seats = ['1','2','3',];
  return (

    <div>
      <Hello seats/>
      <Animals />
    </div>
  )
}

export default App
