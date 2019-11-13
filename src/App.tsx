import React from "react";
import { Popover } from "./utilComponent";

const App: React.FC = () => {
  const popoverHandler = { toggleMusk: () => { } } as React.ComponentProps<typeof Popover>['getHandler'];
  return (
    <Popover getHandler={popoverHandler}>
      <button className="hello">world</button>
    </Popover>
  );
};

export default App;
