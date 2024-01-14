import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import PrelineScript from "./components/PrelineScript";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${urbanist.className} background`}>
        {children} 
      </body>
      <PrelineScript />
    </html>
  )
}
