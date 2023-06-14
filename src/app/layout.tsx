import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Air Bnb',
  description: 'Hello thios is airbnb clone',
}
