import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import PostCard from './pages/PostCard';
import DigitalInvitation from './pages/DigitalInvitation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Happy Learning</div>,
    errorElement: <div>Error bro</div>,
  },
  {
    path: '/invitation',
    element: <DigitalInvitation />,
  },
  {
    path: '/card/:name',
    element: <PostCard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
