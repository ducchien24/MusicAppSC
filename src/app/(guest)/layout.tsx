
import '@/styles/app.css';
export const metadata = {
  title: 'Music app',
  description: 'Music app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
