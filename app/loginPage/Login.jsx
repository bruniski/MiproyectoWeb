"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import LoginPage from './LoginPage'
import Pagehome from '../home/Pagehome'

const Login = () => {
    const session=useSession()
    const {status}=session
    console.log(status)
  return (
    <>
      {
        status==='unauthenticated'?<LoginPage/>:<Pagehome/>
      }
    </>
  )
}

export default Login
