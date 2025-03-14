import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Base styles
import './styles/index.css';

// App routes
import Routes from './navigation/Routes';

// App fonts
import './assets/fonts/Montserrat-SemiBold.ttf';
import './assets/fonts/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat-Regular.ttf';
import './assets/fonts/DelaGothicOne-Regular.ttf';

// API data caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(`Cache error: ${error.message}`)
    }
  }),
});

const router = createBrowserRouter(Routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
