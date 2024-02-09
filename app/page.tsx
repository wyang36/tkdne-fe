'use client'

import Image from "next/image";

export default function Home() {
  const seed = Math.ceil(Math.random() * 100)
  const filename = `/images/outputs/seed${seed.toString().padStart(4, '0')}.png`
  return (
    <div className="relative flex place-items-center">
      <Image
        src={filename}
        className="rounded-2xl"
        alt="placeholder cat pic"
        width={512}
        height={512}
        priority
      />
    </div>
  );
}
