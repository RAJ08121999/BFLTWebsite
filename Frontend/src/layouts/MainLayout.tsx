import { Outlet } from "@tanstack/react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen border-8 border-green-600">
      <Navbar/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
