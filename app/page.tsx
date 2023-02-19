import ContentBlock from '../components/ContentBlock/ContentBlock'
import PromoBlock from '../components/PromoBlock/PromoBlock'

export default function Root() {
  return (
    
      <main className="h-full w-full grow">
        {/* <section>
          <PromoBlock />
        </section> */}
        <section className="container grid grid-auto-flow grid-flow-col">
          <ContentBlock />
        </section>
      </main>
    
  )
}
