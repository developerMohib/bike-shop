import { Suspense } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <Suspense>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  )
}

export default App
