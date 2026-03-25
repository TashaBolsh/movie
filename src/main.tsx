//import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"
import {RouterProvider} from "react-router-dom";
import { router } from '@/common/router'
import { Provider } from 'react-redux'
import { store } from '@/app/store.ts'

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);