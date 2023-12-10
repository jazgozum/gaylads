import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gaylads',
  description: 'gaylads',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        {/* Add your meta tags here */}
        <meta property="og:image" content="/gaylads.jpg" />
        {/* Add other meta tags as needed */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
