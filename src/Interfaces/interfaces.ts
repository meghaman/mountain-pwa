export interface IRouteObject {
  component?: React.FC<any>;
  openInNewTab?: boolean;
  defaultRoute?: boolean;
  key: string;
  path: string;
  onClick?(): void;
}

export interface IMatchedIDFromRoute {
  params: {
    id: string;
  };
}
