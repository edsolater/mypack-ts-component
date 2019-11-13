import React from "react";
import { useToggle } from "../../myHooks";
import "./Popover.css";
import { useHandler } from "myHooks/useHandler";

/**
 * 弹出层内容
 */
const PopContent = ({ contentNode }) =>
  contentNode ? <div className="PopContent">{contentNode}</div> : null;
PopContent.displayName = "Child(PopContent)";

/**
 * Musk层
 */
const Musk = ({ muskController: [isMuskOpen, toggleMusk], contentNode }) =>
  isMuskOpen ? (
    <div
      className="Musk"
      onClick={e => {
        e.stopPropagation();
        toggleMusk();
      }}
    >
      <PopContent contentNode={contentNode} />
    </div>
  ) : null;
Musk.displayName = "Child(Musk)";

declare namespace Popover {
  type getHandler = {
    /**
     * 开关 musk
     */
    toggleMusk?: Function;
  };
}
/**
 * 主组件
 */
const Popover: React.FC<{
  children?: any;
  getHandler?: Popover.getHandler;
  contentNode?: React.ReactElement;
}> = ({ getHandler, children, contentNode }) => {
  const [isMuskOpen, toggleMusk] = useToggle(false);
  useHandler(getHandler, { toggleMusk });
  return (
    <div className="Popover" onClick={toggleMusk}>
      {children}
      <Musk
        muskController={[isMuskOpen, toggleMusk]}
        contentNode={contentNode}
      />
    </div>
  );
};
Popover.displayName = "UI(Popover)";
export default Popover;
