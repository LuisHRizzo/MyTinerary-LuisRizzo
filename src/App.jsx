import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
function App() {
    return (
    <><div className='appLayout' >
      <Navbar/>
      
      <Home />

      <Footer/>

      </div>
    </>
  )
}
export default App
