import { Outlet } from 'react-router'
import './App.css'
import { Button } from "@/components/ui/button"
import { Navigate } from 'react-router'
import {  RedirectToSignIn,useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'


function App() {
  const {user,isLoaded,isSignedIn}=useUser()

  if(!isSignedIn&&isLoaded){
    return<Navigate to={'/auth/sign-in'}/>
  }
  <RedirectToSignIn />;

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
