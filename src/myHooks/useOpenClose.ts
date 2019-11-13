import { useState, useDebugValue } from 'react'

export const useOpenClose = initState => {
  const [state, changeStateFunction] = useState(initState)
  useDebugValue(state ? 'on' : 'off')
  const open = () => {
    changeStateFunction(true)
  }
  const close = () => {
    changeStateFunction(false)
  }
  return [state, open, close]
}
