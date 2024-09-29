'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'




const About = () => {
  const router = useRouter()
  return (
    <div>
      <h1>This is my webpage About section</h1> <br/>

      <ul>
        <li><Link href="/">go to Home page</Link></li>
      </ul><br/>

    <button className="button-outline"onClick={() => router.push("/")}>Go to Home Page</button>



      
    </div>
  )
}

export default About
