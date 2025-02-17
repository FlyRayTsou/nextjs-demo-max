import Link from 'next/link'

import Header from "@/components/header";

export default function Home() {
  console.log("...executing")
  return (
    <main>
      <Header />
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
