import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxPersistor, ReduxStore } from './redux/ReduxStore'

import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingIndicator } from '@/components/LoadingIndicator'

const AppRouterProvider = React.lazy(() => import('./AppRouter'));

// Create a QueryClient
const BaseQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
})

ReactDOM
  .createRoot(document.getElementById('root')!).
  render(
    <React.StrictMode>
      <Suspense fallback={<LoadingIndicator/>}>
        <Provider store={ReduxStore}>
          <PersistGate loading={<LoadingIndicator/>} persistor={ReduxPersistor}>
            <QueryClientProvider client={BaseQueryClient}>
              <AppRouterProvider/>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    </React.StrictMode>,
  )
