import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface IProps {
  isChecked: boolean
}

const a = (...rest: any[]): void => {
  console.log(rest)
}

const e = 'e'
const l = 'l'

a`H${e}L${l}O`

const StyledTest: FC<IProps> = ({ isChecked }): ReactElement => {
  const CheckBox = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: ${() => (isChecked ? 'pink' : 'greenyellow')};
  `
  return (
    <div>
      <CheckBox></CheckBox>
    </div>
  )
}

export default StyledTest
