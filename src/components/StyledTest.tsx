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

const CheckBox = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props: { isChecked: boolean }) =>
    props.isChecked ? 'pink' : 'green'};
`

const StyledTest: FC<IProps> = ({ isChecked }): ReactElement => {
  return (
    <div>
      <CheckBox isChecked={isChecked}></CheckBox>
    </div>
  )
}

export default StyledTest
