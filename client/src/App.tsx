import { Suspense } from 'react'
import './App.css'
import Home from './pages/home/Home'

function App() {

  return (
    <Suspense>
      <Home />
    </Suspense>
  )
}

export default App
