import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center padding-20">
        <h1 className="text-white text-9xl font-bold font-serif underline padding-20 drop-shadow-[0_9.9px_9.9px_rgba(0,250,250,0.8)]">
          CowboyBooks
        </h1>
        <h2 className="text-white font-bold text-6xl padding-20">
          <Link href={'./login-register'}>Click me to log in or register</Link>
        </h2>
      </div>
    </main>
  );
}
