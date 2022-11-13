import { Navigate, Outlet } from 'react-router-dom'
import HeaderDrawer from '../components/HeaderDrawer'

const ProtectedRoute = ({
 setIsLoggedIn,
 user,
 redirectPath = '/signIn',
 children,
}) => {
 if (user === false) {
  return <Navigate to={redirectPath} replace />
 }

 return children ? (
  children
 ) : (
  <>
   <HeaderDrawer user={user} setIsLoggedIn={setIsLoggedIn} />
   <Outlet />
  </>
 )
}
export default ProtectedRoute
