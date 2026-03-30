<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>)
=======
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
>>>>>>> 6d2cea59e2ed35c58ce92d7be59d857c5aade9f4
