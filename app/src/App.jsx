import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import ProjectForm from './components/ProjectForm'


function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <ProjectForm />,
            errorElement: <NotFound />,
        }
    ])
    
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
