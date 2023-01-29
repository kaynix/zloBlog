import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="ru">
      <body className='mx-auto px-1'>
      {/* <body className='container mx-auto px-1'> */}
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
