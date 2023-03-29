import { IRoutes } from "./index.interfaces";

export const ROUTES_LIST: IRoutes = {
  home: {
    name: 'Home',
    path: '',
    to: '/'
  },
  withText: {
    name: 'With Text',
    path: 'with-text',
    to: '/with-text'
  },
  withoutText: {
    name: 'Without Text',
    path: 'without-text',
    to: '/without-text'
  }
} 