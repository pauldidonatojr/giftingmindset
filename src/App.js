import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Landing, Error, Register, ProtectedRoute } from './pages'
import DashboardV2 from './pages/dashboardV2/Dashboard'
import AddUser from './pages/dashboardV2/manageUser/AddUser'
import AllMembers from './pages/dashboardV2/manageUser/AllMembers'
import ActivateRequest from './pages/dashboardV2/manageUser/ActivatRequest'
import GenealogyTree from './pages/dashboardV2/genealogy/GenealogyTree'
import DirectTeam from './pages/dashboardV2/genealogy/DirectTeam'
import SignUpScreen from './pages/SignUpScreen'
import SignInScreen from './pages/SignInScreen'
import ForgotPasswordSubmitScreen from './pages/ForgotPasswordSubmitScreen'
import ForgotPasswordScreen from './pages/ForgotPasswordScreen'
import ConfirmSignUp from './pages/ConfirmSignUp'
import 'react-toastify/dist/ReactToastify.css'
import { Auth, API, Storage } from 'aws-amplify'
import { Stats, Logout } from './pages/dashboard'
import HeaderDrawer from './components/HeaderDrawer'
import awsmobile from './aws-exports'

Auth.configure(awsmobile)

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route
     path="/"
     element={
      <ProtectedRoute>
       <DashboardV2 />
      </ProtectedRoute>
     }
    >
     <Route index element={<Stats />} />
     <Route path="logout" element={<Logout />} />
    </Route>
    <Route path="landing" element={<Landing />} />
    <Route path="signUp" element={<SignUpScreen />} />
    <Route path="signIn" element={<SignInScreen />} />
    <Route path="/confirmSignUp" element={<ConfirmSignUp />} />
    <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
    <Route
     path="/forgotpasswordsubmit"
     element={<ForgotPasswordSubmitScreen />}
    />

    <Route path="*" element={<Error />} />
    <Route path="admin/dashboardv2" element={<DashboardV2 />} />
    <Route
     path="admin/adduser"
     element={
      <>
       <HeaderDrawer />
       <AddUser />
      </>
     }
    />
    <Route
     path="admin/allmembers"
     element={
      <>
       <HeaderDrawer />
       <AllMembers />
      </>
     }
    />
    <Route
     path="admin/genealogytree"
     element={
      <>
       <HeaderDrawer />
       <GenealogyTree />
      </>
     }
    />
    <Route
     path="admin/activaterequest"
     element={
      <>
       <HeaderDrawer />
       <ActivateRequest />
      </>
     }
    />
    <Route
     path="admin/directteam"
     element={
      <>
       <HeaderDrawer />
       <DirectTeam />
      </>
     }
    />
   </Routes>
   <ToastContainer position="top-center" />
  </BrowserRouter>
 )
}

export default App
