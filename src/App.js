import { Routes, Route, useNavigate } from 'react-router-dom'
import AddUser from './pages/dashboardV2/manageUser/AddUser'
import AllMembers from './pages/dashboardV2/manageUser/AllMembers'
import ActivateRequest from './pages/dashboardV2/manageUser/ActivateRequest'
import GenealogyTree from './pages/dashboardV2/genealogy/GenealogyTree'
import DirectTeam from './pages/dashboardV2/genealogy/DirectTeam'
import SignUpScreen from './pages/SignUpScreen'
import SignInScreen from './pages/SignInScreen'
import Error from './pages/Error'
import Landing from './pages/Landing'
import ForgotPasswordSubmitScreen from './pages/ForgotPasswordSubmitScreen'
import ForgotPasswordScreen from './pages/ForgotPasswordScreen'
import ConfirmSignUp from './pages/ConfirmSignUp'
import { Auth, API, Storage } from 'aws-amplify'
import awsmobile from './aws-exports'
import { useState, useEffect } from 'react'
import ProtectedRoute from './utils/ProtectedRoute'
import DashboardHome from './pages/dashboardV2/DashboardHome'

Auth.configure(awsmobile)

function App() {
 const [loggedIn, setIsLoggedIn] = useState(false)
 let navigate = useNavigate()

 useEffect(() => {
  const getCurrentUser = async () => {
   let user = await Auth.currentAuthenticatedUser()
   if (user) {
    setIsLoggedIn(true)
    navigate('/dashboard')
   } else {
    setIsLoggedIn(false)
   }
  }
  getCurrentUser()
 }, [loggedIn])
 return (
  <Routes>
   <Route
    path="/signIn"
    element={<SignInScreen setIsLoggedIn={setIsLoggedIn} />}
   />
   <Route path="/signUp" element={<SignUpScreen />} />
   <Route
    path="/confirmSignUp"
    element={<ConfirmSignUp setIsLoggedIn={setIsLoggedIn} />}
   />
   <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
   <Route
    path="/forgotpasswordsubmit"
    element={<ForgotPasswordSubmitScreen />}
   />
   <Route path="*" element={<Error />} />
   <Route path="/landing" element={<Landing />} />
   <Route
    path="/"
    element={<ProtectedRoute setIsLoggedIn={setIsLoggedIn} user={loggedIn} />}
   >
    <Route path="/dashboard" element={<DashboardHome />} />
    <Route path="/directteam" element={<DirectTeam />} />
    <Route path="/genealogytree" element={<GenealogyTree />} />
    <Route path="/activaterequest" element={<ActivateRequest />} />
    <Route path="/adduser" element={<AddUser />} />
    <Route path="/allmembers" element={<AllMembers />} />
   </Route>
  </Routes>
 )
}

export default App
