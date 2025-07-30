import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// import Contact from './Pages/Contact/Contact.jsx'
import Navbar from './compnent/Navbar/Navbar.jsx'
import Footer from './compnent/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Category from './compnent/Category/category.jsx'
import Men from './Pages/Men/Men.jsx'
// import Sneakers from './Pages/Sneakers/Sneakers.jsx'
// import Running from './Pages/Running/Running.jsx'
// import Casual from './Pages/Casual/Casual.jsx'
// import Boots from './Pages/Boots/Boots.jsx'
// import Heels from './Pages/Womenheels/Heels.jsx'
// import Womenboots from './Pages/Womenboots/Womenboots.jsx'
// import Womenrunning from './Pages/Womenrunning/Womenrunning.jsx'
// import Flats from './Pages/Flats/Flats.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/allItem/:category' element={<Men/>}/>
    {/*<Route path='/contact' element={<Contact/>}/>
    <Route path='/sneakers' element={<Sneakers/>}/>
    <Route path='/running' element={<Running/>}/>
    <Route path='/casual' element={<Casual/>}/>
    <Route path='/boot' element={<Boots/>}/>
    <Route path='/heel' element={<Heels/>}/>
    <Route path='/boots' element={<Womenboots/>}/>
    <Route path='/wrunning' element={<Womenrunning/>}/>
    <Route path='/flats' element={<Flats/>}/> */}

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App