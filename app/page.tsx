import ContentBlock from '../components/ContentBlock/ContentBlock'
import PromoBlock from '../components/PromoBlock/PromoBlock'

export default function Root() {
  return (
    
      <main>
        {/* <section>
          <PromoBlock />
        </section> */}
        <section className="container grid grid-flow-col auto-cols-fr">
          <ContentBlock />
        </section>
      </main>
    
  )
}
