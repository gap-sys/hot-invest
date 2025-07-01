import { Meta, Navbar, Header, Footer, StepsOpen, Card, FAQ, Service, Benefits, Mission } from 'src/presentation/components'
import headerStyles from 'src/presentation/components/common/header/header.module.scss'
import { IMAGE } from 'src/presentation/assets'

const Home = () => {
  const IMAGES = IMAGE.HEADER_IMAGE

  return (
    <div>
      <Meta
        title="Conta Digital HotInvest – Autonomia, rendimento e zero tarifas"
        description="Simplifique sua vida financeira com a conta digital HotInvest. Controle total pelo app, transferências grátis, rendimento acima da poupança e sem taxas escondidas."
        keywords="HotInvest, conta digital, cartão HotInvest, transferências grátis, rendimento CDI, conta sem tarifas, abrir conta digital, fintech"
        image={IMAGES.src}
      />

      <Navbar />
      <Header
        title={
          <>
            Não é só um banco<br />
            É o futuro, do seu jeito<br />
            É <span className={headerStyles.highlight}><span style={{ color: "#EF5635" }}>Hot</span><span style={{ color: "#16487E", fontWeight: 400 }}>Invest</span></span>
          </>
        }
        image={IMAGES.src}
      />

      <StepsOpen />
      <Card />
      <Benefits />
      <Mission />
      <Service />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
