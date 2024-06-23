import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { HomeLoader as homeLoader } from './root'
import ErrorPage from './pages/ErrorPage/Errorpage'
import MyHome from './pages/Home/Home'
import Search from './pages/Search/Search'
import Watch from './pages/Watch/Watch'
import { loader as watchLoader } from './pages/Watch/WatchLoader'
import MyVideoPlayer from './components/ui/VideoPlayer/VideoPlayer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <MyHome />,
        
      }, {
        path: 'search',
        element: <Search />,
      }, {
        path: 'watch/:animeid',
        element: <Watch />,
        loader: watchLoader,
        children: [
          {
            path: ':episodeid',
            element: <MyVideoPlayer />,
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
