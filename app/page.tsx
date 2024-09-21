import ContentBlock from '../components/ContentBlock/ContentBlock'
import PromoBlock from '../components/PromoBlock/PromoBlock'

export default function Root() {
  return (
    
      <main className="h-full w-full">
        {/* <section>
          <PromoBlock />
        </section> */}
        <section className="container py-4 grid lg:grid-cols-3 gap-4 md:grid-cols-1">
          <ContentBlock />
        </section>
      </main>
    
  )
}
