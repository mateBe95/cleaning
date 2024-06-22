import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Home  from "./pages/Home.jsx";
import Work  from "./pages/Work.jsx";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/cleaning/",
    element: <App />,
    children: [
      {
        path: "/cleaning/",
        element: <Home />,
      },
      {
        path: "/cleaning/about",
        element: <About />,
      },
      {
        path: "/cleaning/work",
        element: <Work />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
