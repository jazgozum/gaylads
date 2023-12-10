import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gay">
        <div className="fixed">
         
            <Image
              src="/gaylads.jpg"
              alt="Vercel Logo"
              className="dark:invert rounded-full"
              width={400}
              height={24}
              priority
            />
        </div>

      
    </main>
  )
}
