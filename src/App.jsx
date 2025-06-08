import { useState } from 'react'
import './app.css'

import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Secondpage from './components/Secondpage'
import Thirdhero from './components/Thirdhero'
import Promopage from './components/Promopage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Secondpage/>
      <Thirdhero/>
      <Promopage/>
      <Footer/>
    </div>
  )
}

export default App
