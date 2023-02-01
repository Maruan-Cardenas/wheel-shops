import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Maciza = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('maciza'))
  return (
    <Layout>
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas macizas para patinetes eléctricos</h1>
        <p>Ofrecemos una amplia selección de ruedas sólidas de alta calidad para patinetes eléctricos. Ofrecen una mayor estabilidad, seguridad, durabilidad y suavidad en comparación con las ruedas neumáticas. Son más fáciles de mantener, ligeras y personalizables.</p>
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

export default Maciza
