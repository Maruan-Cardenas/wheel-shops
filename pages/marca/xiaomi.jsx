import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Xiaomi = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('xiaomi'))
  return (
    <Layout
      title='Ruedas para patinetes Xiaomi'
      description='Comprar ruedas para patinetes eléctricos Xiaomi en nuestra tienda en línea. Ofrecemos una amplia selección de ruedas de alta calidad. Mejorar tu experiencia de movilidad.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas para patinetes xiaomi</h1>
        <p>Aquí encontrarás una amplia selección de ruedas de alta calidad para mejorar la movilidad de tu patinete eléctrico Xiaomi. Ofrecemos opciones de tamaño y diseño para satisfacer tus necesidades de movilidad urbana. ¡Comprar ahora y experimenta la libertad de la movilidad eléctrica con ruedas de alta calidad para tu patinete Xiaomi!</p>
        <div className={styles.iframe}>
          {
          ARTICLE.map((article, index) => (
            <AmazonArticle
              key={index}
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

export default Xiaomi
