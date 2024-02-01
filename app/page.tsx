import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex place-items-center">
      <Image
        src="http://placekitten.com/512/512"
        className="rounded-2xl"
        alt="placeholder cat pic"
        width={512}
        height={512}
        priority
      />
    </div>
  );
}
