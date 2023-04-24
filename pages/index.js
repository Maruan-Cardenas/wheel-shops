import AmazonArticle from '../components/Iframe'
import Layout from '../components/Layout'
import { ARTICLES } from '../data/articles'
import styles from '../styles/Home.module.scss'

export default function Home () {
  return (
    <Layout
      title='Ruedas para patinetes eléctricos'
      description='Comprar ruedas para patinetes eléctricos en nuestra tienda en línea. Ofrecemos una amplia selección de ruedas de alta calidad para las principales marcas: vivobike, ducati, cetotec, gotrax, xiaomi, dever, alfawise, hiboy, viron, wayscral, wispeed, zwheel. Mejorar tu experiencia de movilidad.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>¿Buscas recambios para tú patinete eléctrico?</h1>
        <p>
          En nuestra tienda encontrarás los mejores recambios para tu patinete eléctrico. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
        <div className={styles.iframe}>
          {
          ARTICLES.map((article) => (
            <AmazonArticle
              key={article.id}
              iframe={article.iframe}
              title={article.title}
              description={article.description}
              image={article.image}
              link={article.link}
            />
          ))
        }
        </div>
      </section>
    </Layout>
  )
}
