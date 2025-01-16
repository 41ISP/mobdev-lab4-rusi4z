import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './app/routers/router'
import { RouterProvider } from 'react-router-dom'
import Input from './shared/ui/Input/Input'
import Button from './shared/ui/Button/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
