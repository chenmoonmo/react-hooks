import React, { FC, ReactElement, useContext, useRef, useState } from 'react'

const appContext = React.createContext({ username: '' })

const Nav: FC = (): ReactElement => {
  const { username } = useContext(appContext)
  return <div>用户名:{username}</div>
}

const Message: FC = (): ReactElement => {
  const { username } = useContext(appContext)
  return <div>welcome {username}</div>
}

const Context: FC = (): ReactElement => {
  const [username, setUsername] = useState('who')
  const inputRef = useRef<HTMLInputElement>(null)
  const style = {
    border: '1px solid pink',
    padding: '0 10px',
    marginBottom: '10px',
    width: '200px',
  }
  return (
    <appContext.Provider value={{ username: username }}>
      <div style={style}>
        <p>使用react实现双向绑定以及父子组件数据共享</p>
        <p>
          用了 <strong>useState useRef useContext</strong>
        </p>
        <input
          ref={inputRef}
          onKeyUp={() => setUsername(inputRef.current!.value + 'sb')}
        ></input>
        <Nav></Nav>
        <Message />
      </div>
    </appContext.Provider>
  )
}

export default Context
