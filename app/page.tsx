'use client'

import Image from "next/image";
import { useState } from 'react'

export default function Home() {
  const [seed, setSeed] = useState(Math.ceil(Math.random() * 100))

  const handleNewSeed = () => {
    const newSeed = Math.ceil(Math.random() * 100)
    setSeed(newSeed)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex place-items-center my-2">
        <Image
          src={`/images/outputs/seed${seed.toString().padStart(4, '0')}.png`}
          className="rounded-2xl"
          alt="fake cat pic"
          width={512}
          height={512}
          priority={true}
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNewSeed}>
        New Cat
      </button>
    </div>
  );
}
