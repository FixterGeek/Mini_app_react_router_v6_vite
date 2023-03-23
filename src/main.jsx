import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home, {loader as homeLoader} from './routes/Home'
import Gists, {loader as gistsLoader} from './routes/Gists'
import Orgs,  {loader as orgsLoader} from './routes/Orgs'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    loader:homeLoader,
    children:[{
      path:'/gists',
      element:<Gists />,
      loader:gistsLoader
    },{
      path:'/orgs',
      element:<Orgs />,
      loader:orgsLoader
    }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
