import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Portfolio Main Page</h1>
      <Link href="/frontend">Frontend Projects</Link>
      <Link href="/gallery">Art Gallery</Link>
    </div>
  );
}

export default page