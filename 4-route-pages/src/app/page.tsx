"use client"
import Link from "next/link"

import {useRouter} from "next/navigation";

  const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1> This is my webpage </h1><br/>
      
    <ul>
      
      <li><Link href="/about">go to about page</Link></li>
      <li><Link href="/contact">go to contact page</Link></li>
      <li><Link href="/footer">go to footer page </Link></li>
      <li><Link href="/navbar">go to navbar  </Link></li>
    </ul>
    
      <br/>
       
    <button className="button-outline"onClick={() => router.push("/about")}>Go to About Page</button><br/><br/>
    <button className="button-outline"onClick={() => router.push("/contact")}>Go to Contact Page</button><br/><br/>
    <button className="button-outline"onClick={() => router.push("/footer")}>Go to Footer Page</button><br/><br/>
    <button className="button-outline"onClick={() => router.push("/navbar")}>Go to Navbar Page</button>


  </div>
  )

  
}

export default Home

