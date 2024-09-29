import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import Contactus from "./pages/Contact us"
import TermAndConditions from "./pages/Term And Conditions"
import Aboutus from  "./pages/About us"
import { Routes,Route } from "react-router-dom"

const App = () =>{
  return(
    <>
  <Navbar />
  
  <Routes>
<Route path="/" element = {<Home/>} />
<Route path="/projects" element = {<Projects/>} />
<Route path="/contactus" element = {<Contactus/>} />
<Route path="/term and conditions" element = {<TermAndConditions/>} />
<Route path="/about us" element = {<Aboutus/>} />
  </Routes>
  
  <Footer  / >
          </>  )
}

export default App