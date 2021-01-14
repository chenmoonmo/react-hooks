import React, { FC, ReactElement, useContext, useRef, useState } from 'react'

const appContext = React.createContext({ username: '' })

const Nav: FC = (): ReactElement => {
  const { username } = useContext(appContext)
  return <div>{username}</div>
}

const Message: FC = (): ReactElement => {
  const { username } = useContext(appContext)
  return <div>welcome {username}</div>
}

const Context: FC = (): ReactElement => {
  const [username, setUsername] = useState('who')
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <appContext.Provider value={{ username: username }}>
      <div>
        <input
          ref={inputRef}
          onKeyUp={() => setUsername(inputRef.current!.value)}
        ></input>
        <Nav></Nav>
        <Message />
      </div>
    </appContext.Provider>
  )
}

export default Context
