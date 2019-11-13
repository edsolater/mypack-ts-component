import React from 'react'
import { Popover } from './components'

const App: React.FC = () => {
  const popoverHandler = { musk: undefined } as React.ComponentProps<typeof Popover>['widgetHandler']
  return (
    <Popover widgetHandler={popoverHandler}>
      jkj
      <button className="hello">world</button>
    </Popover>
  )
}
export default App
