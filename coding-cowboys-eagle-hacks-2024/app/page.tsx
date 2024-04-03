import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={'./login-register'}>Click me to login or register!!</Link>
    </main>
  );
}
