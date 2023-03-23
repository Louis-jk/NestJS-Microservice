import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './page/dashboard';
import Main from './page/portfolio/main';
import Project from './page/dashboard/project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/project',
    element: <Project />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
