import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <NotFound />,
        }
    ])
    
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
