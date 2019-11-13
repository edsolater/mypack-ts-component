import { useState, useDebugValue } from 'react'

export const useToggleOpenClose = initState => {
  const [state, changeStateFunction] = useState(initState)
  useDebugValue(state ? 'on' : 'off')
  const toggle = () => {
    changeStateFunction(!state)
  }
  const open = () => {
    changeStateFunction(true)
  }
  const close = () => {
    changeStateFunction(false)
  }
  return [state, toggle, open, close]
}
