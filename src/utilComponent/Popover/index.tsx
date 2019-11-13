import React from 'react'
import './Popover.css'
import { useToggle, useHandler, useToggleOpenClose } from 'myHooks'

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
const Musk: React.FC<{ muskController: any[]; contentNode: any }> = ({
  muskController: [isMuskOpen, toggleMusk, openMusk, closeMusk],
  contentNode
}) =>
  isMuskOpen ? (
    <div
      className="Musk"
      onClick={e => {
        e.stopPropagation()
        toggleMusk()
      }}
    >
      <PopContent contentNode={contentNode} />
    </div>
  ) : null
Musk.displayName = 'Child(Musk)'

/**
 * 主组件
 */
const Popover: React.FC<{
  children?: any
  getHandler?: {
    /**
     * 开关 musk
     */
    toggleMusk?: (...any: any[]) => any
  }
  contentNode?: React.ReactElement
}> = ({ getHandler, children, contentNode }) => {
  const muskController = useToggleOpenClose(false)
  const [isMuskOpen, toggleMusk, openMusk, closeMusk] = muskController
  useHandler(getHandler, { toggleMusk, openMusk, closeMusk })
  return (
    <div className="Popover" onClick={toggleMusk}>
      {children}
      <Musk muskController={muskController} contentNode={contentNode} />
    </div>
  )
}
Popover.displayName = 'UI(Popover)'
export default Popover
