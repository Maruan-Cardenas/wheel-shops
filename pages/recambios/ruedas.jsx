import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { useGetArticlesFilter } from '../../firebase/methods/get'
import styles from './Recambio.module.scss'

const Ruedas = () => {
  const articles = useGetArticlesFilter('articles', 'ruedas', 'category')
  return (
    <Layout
      title='Ruedas para patinetes eléctricos'
      description='Comprar ruedas para patinetes eléctricos en nuestra tienda en línea. Ofrecemos una amplia selección de ruedas de alta calidad para las principales marcas: vivobike, ducati, cetotec, gotrax, xiaomi, dever, alfawise, hiboy, viron, wayscral, wispeed, zwheel. Mejorar tu experiencia de movilidad.'
    >
      <section className={styles.recambios}>
        <h1 className={styles.title}>¿Necesitas ruedas nuevas para tú patinete eléctrico?</h1>
        <p className={styles.description}>
          En nuestra tienda encontrarás las mejores ruedas en todos los tamaño para tú <strong>patinete eléctrico.</strong>
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

export default Ruedas
