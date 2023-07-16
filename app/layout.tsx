import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="ru" className='h-full' data-theme="light">
      {/* <body className='h-full mx-auto p-2 flex flex-1 flex-col'> */}
      <body className='md:container md:mx-auto px-4 py-8'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
