import {
 BrowserRouter,
 Routes, // instead of "Switch"
 Route,
} from 'react-router-dom'
import {
 Navbar,
 Footer,
 Footer2,
 Tabs,
 CreateUser,
 ListUser,
 UpdateUser,
 EditUser,
} from './components/index'
import { HomePage } from './pages/index'

function App() {
 return (
  <BrowserRouter>
   <Navbar />
   <Tabs />
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
   </Routes>
   <Routes>
    <Route index element={<ListUser />} />
    <Route path="user/create" element={<CreateUser />} />
    <Route path="user/view" element={<ListUser />} />
    <Route path="user/view/:id" element={<EditUser />} />
   </Routes>
   <Footer2 />
  </BrowserRouter>
 )
}

export default App
