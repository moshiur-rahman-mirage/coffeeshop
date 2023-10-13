import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home';
import Update from './Page/Update/Update';
import Add from './Page/Add/Add';
import Root from './Root';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('http://localhost:5000/')
      },
      {
        path: "add",
        element: <Add/>
      },
      {
        path: "update/:id",
        element: <Update/>,
        loader:({params})=>fetch(`http://localhost:5000/${params.id}`)
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
