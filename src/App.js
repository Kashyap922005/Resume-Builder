import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppStyles from "./App.module.scss";
import Template2 from "./Templates/components/template2"
import Dashboard from "./Dashboard/components/dashboard";
import Templates from "./Templates/page";

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Dashboard />
    },
    {
      path : '/template2',
      element : <Template2 />
    },
    {
      path : '/template1',
      element : <Templates />
    }
  ])


  return (
    <div className= {AppStyles.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;