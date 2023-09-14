import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import './App.css'
import Home from './pages/home/home';
import Cities from './pages/cities/cities';
import CitiDetail from './pages/citiDetail/citiDetail';
import Login from './pages/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Link as Anchor, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/actions/userActions.js'

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
      },
      {
        path: '/cities/:id',
        element: <CitiDetail/>,
      },
      {
        path: '/login',
        element: <Login/>
      }
    ] 
  }
])


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());
  }, [])

    return (
    <>          
      <RouterProvider router={router} />
    </>
  )
}
export default App
