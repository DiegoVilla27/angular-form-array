interface IRouteChild {
  name: string;
  path: string;
  to: string;
}

export interface IRoutes {
  home: IRouteChild,
  withText: IRouteChild,
  withoutText: IRouteChild
}