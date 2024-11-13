import React from 'react'
import SignInForm from './SignInForm'
import { getUserByEmail } from '@/app/actions/getUserByEmail'
import { auth } from '../../../../auth'
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const session = await auth()

    if(session) {
      redirect("/admin"); 
    }
  // getUserByEmail("l")

  return (
    <div className='lg:px-30 py-5 px-3 flex justify-center'>
      <SignInForm />
    </div>
  )
}

export default SignInPage
