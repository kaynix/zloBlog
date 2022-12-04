import Header from '../components/Header/Header'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="ru">
      <head />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
