import React, { FC, ReactElement, useState } from 'react'
import '../assets/css/hellworld.css'

// FC 函数  <Iprops> 参数的泛形 ReactElement 返回值
const Header: FC = (): ReactElement => {
  const [bgc, setBgc] = useState<string>(Color.getColor())
  return (
    <div
      style={{ marginBottom: '10px' }}
      className="outer"
      onMouseEnter={() => setBgc(Color.getColor())}
    >
      <p style={{ color: bgc }}> 使用useState改变颜色</p>
      <div className="inner" draggable style={{ background: bgc }}></div>
    </div>
  )
}

class Color {
  static getColor = (): string => {
    let r: number = Math.ceil(Math.random() * 255)
    let g: number = Math.ceil(Math.random() * 255)
    let b: number = Math.ceil(Math.random() * 255)
    return `rgb(${r},${g},${b})`
  }
}

export default Header
