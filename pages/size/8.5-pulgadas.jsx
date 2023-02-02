import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Inches85 = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('8.5 pulgadas'))
  return (
    <Layout
      title='Ruedas de 8.5 pulgadas para patinetes eléctricos'
      description='Mejora tu experiencia de movilidad con nuestra amplia selección de ruedas de 8.5 pulgadas para patinetes eléctricos. Ofrecemos una combinación perfecta de estabilidad, seguridad, durabilidad y suavidad en el camino.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas de 8.5 pulgadas para patinetes eléctricos</h1>
        <p>Mejora tu experiencia de movilidad con nuestra amplia selección de ruedas de 8.5 pulgadas para patinetes eléctricos. Ofrecemos una combinación perfecta de estabilidad, seguridad, durabilidad y suavidad en el camino.</p>
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

export default Inches85
