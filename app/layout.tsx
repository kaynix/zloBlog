import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="ru" className='h-full'>
      {/* <body className='h-full mx-auto p-2 flex flex-1 flex-col'> */}
      <body className='container mx-auto px-1'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
