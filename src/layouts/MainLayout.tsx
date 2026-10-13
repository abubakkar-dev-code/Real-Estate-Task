import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'

const MainLayout = () => {
  return (
    <>
    <header>
       <Navbar/>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        
    </footer>
    </>
  )
}

export default MainLayout