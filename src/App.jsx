import './App.css'
import React , {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header , Footer} from './components'
import { Outlet } from 'react-router-dom'
function App() {

  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-slate-700'>
    <div className='w-full '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </div>
  )
  : null
}

export default App
