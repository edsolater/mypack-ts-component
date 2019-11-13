import React from 'react'
import './Popover.css'
import { useSwitcher } from 'myHooks'
import { SwitchObject } from 'myHooks/useSwitcher'
import { attachWidgetHandlers } from 'myComponentUtil'

/**
 * 弹出层内容
 */
const PopContent = ({ contentNode }) =>
  contentNode ? <div className="PopContent">{contentNode}</div> : null
PopContent.displayName = 'Child(PopContent)'

/**
 * Musk层
 * TODO //还是不够直观要再修复
 */
const Musk: React.FC<{ muskSwitcher: SwitchObject; contentNode: any }> = ({
  muskSwitcher,
  contentNode
}) => {
  //TOFIX
  return muskSwitcher.state ? (
    <div
      className="Musk"
      onClick={e => {
        e.stopPropagation()
        muskSwitcher.toggle()
      }}
    >
      <PopContent contentNode={contentNode} />
    </div>
  ) : null
}
Musk.displayName = 'Child(Musk)'

/**
 * 主组件
 */
const Popover: React.FC<{
  widgetHandler?: {
    /**
     * 控制musk开关
     */
    musk?: SwitchObject
  }
  /**
   * 需要Popover的内容
   */
  contentNode?: React.ReactElement
}> = ({ widgetHandler, contentNode, children }) => {
  const muskSwitcher = useSwitcher(false)
  attachWidgetHandlers(widgetHandler, { musk: muskSwitcher })
  return (
    <div
      className="Popover"
      onClick={() => {
        muskSwitcher.toggle()
      }}
    >
      {children}
      <Musk muskSwitcher={muskSwitcher} contentNode={contentNode} />
    </div>
  )
}
Popover.displayName = 'Widget(Popover)'
export default Popover
