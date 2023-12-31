import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import PostCard from './pages/PostCard';
import DigitalInvitation from './pages/DigitalInvitation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostCard />,
  },
  {
    path: '/invitation',
    element: <DigitalInvitation />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);
