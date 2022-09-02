import {
 BrowserRouter,
 Routes, // instead of "Switch"
 Route,
} from 'react-router-dom'
import { Navbar, Footer } from './components/index'
import { HomePage } from './pages/index'

function App() {
 return (
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
   </Routes>
   <Footer />
  </BrowserRouter>
 )
}

export default App