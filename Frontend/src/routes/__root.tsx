import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => (
  <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
);

export const Route = createRootRoute({ component: RootLayout })