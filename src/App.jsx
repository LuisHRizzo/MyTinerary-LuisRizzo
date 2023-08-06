import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';

function App() {
    return (
    <><div className='appLayout' >
    <div className="" ><Navbar/></div>
      
      <Home />

      </div>
    </>
  )
}
export default App
