import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from "./Homepage.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Surat from './components/suratCity/components/Surat.js';
import appStore from './utils/appStore.js';
import { Provider } from 'react-redux';
const Applayout = ()=>{
  return(
  <>
    <Provider store={appStore}>
    <Surat/>
    </Provider>
  </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>
  },
  {
    path:"/surat",
    element:<Applayout/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
