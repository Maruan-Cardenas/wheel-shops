import Card from '../components/Card'
import Layout from '../components/Layout'
import { useGetAllArticles } from '../firebase/methods/get'
import styles from '../styles/Home.module.scss'

export default function Home () {
  const articles = useGetAllArticles('articles')
  return (
    <Layout
      title='Ruedas para patinetes eléctricos'
      description='Comprar ruedas para patinetes eléctricos en nuestra tienda en línea. Ofrecemos una amplia selección de ruedas de alta calidad para las principales marcas: vivobike, ducati, cetotec, gotrax, xiaomi, dever, alfawise, hiboy, viron, wayscral, wispeed, zwheel. Mejorar tu experiencia de movilidad.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>¿Buscas recambios para tú patinete eléctrico?</h1>
        <p className={styles.description}>
          En nuestra tienda encontrarás los mejores recambios para tu patinete eléctrico. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
        <div className={styles.cardBox}>
          {
            articles.map((article) => (
              <Card article={article} key={article.id} />
            ))
          }
        </div>
      </section>
    </Layout>
  )
}
