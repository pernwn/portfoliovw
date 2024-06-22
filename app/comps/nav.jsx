import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/portfolio">Portfolio</Link>
   
    </div>
  );
}

export default Nav