import { ComponentProps, JSXElementConstructor } from "react";

export type GetWidgetHandler<C extends JSXElementConstructor<any>> = ComponentProps<C>['widgetHandler']