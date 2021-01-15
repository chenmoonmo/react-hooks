interface Istate {
  count: number
}

export interface IAction {
  type: ACTION_TYPE
  payload?: any
}

enum ACTION_TYPE {
  COUNT_UP = 'countup',
  COUNT_DOWN = 'countdown',
}

const reducer = (state: Istate, action: IAction): Istate => {
  switch (action.type) {
    case ACTION_TYPE.COUNT_UP:
      return {
        ...state,
        count: state.count++,
      }
    case ACTION_TYPE.COUNT_DOWN:
      return {
        ...state,
        count: state.count--,
      }
    default:
      return state
  }
}

export default reducer
