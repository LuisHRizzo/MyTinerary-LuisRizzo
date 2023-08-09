import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import './App.css'
import Home from './pages/home/home';
import Cities from './pages/cities/cities';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link as Anchor, NavLink } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cities',
        element: <Cities/>,
      }
    ] 
  }
])


function App() {
    return (
    <><div className='appLayout' >
          
      <RouterProvider router={router} />

      </div>
    </>
  )
}
export default App
