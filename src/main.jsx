import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";


import router from './Routes/Routes';
import AuthProviders from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
   <AuthProviders>
   <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
   </AuthProviders>
  </div>
)
