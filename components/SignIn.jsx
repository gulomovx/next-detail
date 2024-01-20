'use client'

import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
const SignIn = () => {
    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div className="flex gap-8  ml-auto">
                <p className="text-3xl">{session.user.name}</p>
                <button onClick={()=>signOut()} className="text-red-300">Sign out</button>
            </div>
        )
    }
  return (
      <div>
          <button onClick={()=>signIn()} className="text-blue-600 bg-slate-200 p-2 px-6 rounded-md">Sign In</button>
    </div>
  )
}

export default SignIn