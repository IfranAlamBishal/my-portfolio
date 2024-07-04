import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import {
  RouterProvider,
} from "react-router-dom";
import SharedProvider from './Shared/SharedProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider>
      <RouterProvider router={router} />
    </SharedProvider>
  </React.StrictMode>,
)
