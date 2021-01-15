import React, { useState } from 'react'
import HelloWorld from './components/helloWorld'
import Context from './components/Context'
import Reducerr from './components/Reducer'
import StyledTest from './components/StyledTest'

function App() {
  const [isChecked, setisChecked] = useState(false)
  return (
    <div className="App">
      <HelloWorld></HelloWorld>
      <Context />
      <Reducerr />
      <button onClick={() => setisChecked(!isChecked)}>改变状态</button>
      <StyledTest isChecked={isChecked} />
    </div>
  )
}

export default App
