import { ReactNode } from "react";

export interface ILayoutProps {
  children: ReactNode;
}

export interface LineDataSet {
  x: number[];
  y: number[];
  type: string;
  mode: string;
  fill?: string;
  name: string;
}

export interface ScaledDataSet {
  [key: number]: LineDataSet;
}
export interface IRouteObject {
  component?: React.FC<any>;
  openInNewTab?: boolean;
  defaultRoute?: boolean;
  key: string;
  path: string;
  onClick?(): void;
}
