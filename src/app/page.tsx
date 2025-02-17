import Link from 'next/link'

export default function Home() {
  console.log("...executing")
  return (
    <main>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
