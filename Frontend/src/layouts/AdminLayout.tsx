import { Outlet } from "@tanstack/react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen border-4 border-red-500 bg-red-700">
      <Navbar/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default AdminLayout
