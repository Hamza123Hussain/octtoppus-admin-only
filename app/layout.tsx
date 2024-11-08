import type { Metadata } from 'next'
import './globals.css'
import ReduxLayout from '@/components/Layout/ReduxLayout'

export const metadata: Metadata = {
  title: 'Octtoppus Admin',
  description: 'Octtoppus Admin ONLY ACCESS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/GeistVF.woff" // Update to WOFF2 if available
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeistMonoVF.woff" // Update to WOFF2 if available
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`$ antialiased bg-white`}>
        <ReduxLayout>{children}</ReduxLayout>
      </body>
    </html>
  )
}
