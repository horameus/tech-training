import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './HomePage';
import { Profile } from './pages/Profile';
import { ProfilesList } from './pages/ProfilesList';
import { NotFoundPage } from './pages/NotFoundPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/profiles',
        element: <ProfilesList />,
    },
    {
        path: '/profiles/:id',
        element: <Profile />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
