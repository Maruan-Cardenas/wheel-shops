import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { useGetArticlesFilter } from '../../firebase/methods/get'
import styles from './Recambio.module.scss'

const Baterias = () => {
  const articles = useGetArticlesFilter('articles', 'baterias', 'category')
  return (
    <Layout
      title='Baterías para patinetes eléctricos'
      description='En nuestra tienda encontrarás las mejores baterías para tu patinete eléctrico. Tenemos baterías de litio, de plomo, de 36V, 48V, 60V, 72V, etc...'
    >
      <section className={styles.recambios}>
        <h1 className={styles.title}>¿Buscas recambios para tú patinete eléctrico?</h1>
        <p className={styles.description}>
          En nuestra tienda encontrarás los mejores recambios para tu patinete eléctrico. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
        <div className={styles.cardBox}>
          {
            articles.map((article) => (
              <Card article={article} key={article.id} h2 />
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

export default Baterias
