import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from "react-router/dom";
import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes/Route';




const queryClient = new QueryClient();



createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />,
</QueryClientProvider>
  </StrictMode>
);