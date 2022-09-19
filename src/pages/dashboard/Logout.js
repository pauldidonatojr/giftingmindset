import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUserFromLocalStorage } from '../../utils/localStorage'

const Logout = () => {
 const { user, isLoading } = useSelector((store) => store.user)
 const navigate = useNavigate()

 removeUserFromLocalStorage()

 useEffect(() => {
  if (user) {
   navigate('/landing')
  }
 }, [user])
}
export default Logout
