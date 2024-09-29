'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Navbar = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is my webpage Navbar section</h1><br/>

      <ul>
        <li><Link href="/">go to Home page</Link></li>
      </ul><br/>
      
      <button className="button-outline"onClick={() => router.push("/")}>Go to home page</button>

    </div>
  )
}

export default Navbar