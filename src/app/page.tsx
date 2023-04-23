
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import React from 'react'





export default function Home() {
 
  return (
   <div> 
<h1 className="text-3xl font-bold underline">
     Welcome to guitar youtuber (guber)
    </h1>
    <ul>
    <li>
        <a href='/video/xUQV6x0Hm2o'> Paradice City</a>
        
      </li>
      <li>
        <a href='/video/gcLLOTvSQkM'> Tool 46 &amp 2</a>

      </li>
    </ul>
    </div>
  )
}
