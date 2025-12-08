import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './product/store.js' 
import { ThemeProvider } from './ThemeProvider.jsx'
import { MainRoutes } from './MainRoutes.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MainRoutes />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)