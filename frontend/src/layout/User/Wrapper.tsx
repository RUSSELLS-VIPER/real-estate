
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Wrapper = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Wrapper