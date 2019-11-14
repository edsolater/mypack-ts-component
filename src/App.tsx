import React from 'react'
import { Popover } from './components'
import { GetWidgetHandler } from 'helper/type_helper'

const App: React.FC = () => {
  const popoverHandler = { musk:undefined } as GetWidgetHandler<typeof Popover>
  return (
    <Popover widgetHandler={popoverHandler}>
      <button className="hello">world</button>
    </Popover>
  )
}
export default App
