import React, { FC, ReactElement, useReducer } from 'react'

import reducer from './rreducer'

enum ACTION_TYPE {
  COUNT_UP = 'countup',
  COUNT_DOWN = 'countdown',
}

const Reducerr: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        <button onClick={() => dispatch({ type: ACTION_TYPE.COUNT_UP })}>
          +
        </button>
        <button onClick={() => dispatch({ type: ACTION_TYPE.COUNT_DOWN })}>
          -
        </button>
      </div>
      <div>{state.count}</div>
    </div>
  )
}

export default Reducerr
