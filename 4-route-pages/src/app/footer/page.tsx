'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'



const Footer = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is my webpage Footer section</h1><br/>

      <ul>
        <li><Link href="/">go to Home page</Link></li>
      </ul><br/>

      <button className="button-outline"onClick={() => router.push("/")}>Go to Home Page</button>
    </div>
  )
}

export default Footer