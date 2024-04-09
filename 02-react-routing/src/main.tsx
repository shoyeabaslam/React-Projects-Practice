import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Contact from './pages/Contact/Contact.tsx'
import GithubProfile, { getGitHubData } from './pages/GithubProfile/GithubProfile.tsx'
//https://reactrouter.com/en/main/routers/picking-a-router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' loader={getGitHubData} element={<GithubProfile/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
