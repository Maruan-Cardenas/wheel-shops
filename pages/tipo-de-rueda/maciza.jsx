import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Maciza = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('maciza'))
  return (
    <Layout
      title='Ruedas Sólidas para Patinetes Eléctricos - Durabilidad y Estabilidad en Cada Paseo'
      description='La rueda sólida es un tipo de rueda fabricada completamente en material sólido como poliuretano o goma. Ofrece una mayor durabilidad y resistencia, así como una mejor capacidad para mantener su forma original.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas Sólidas para Patinetes Eléctricos - Durabilidad y Estabilidad en Cada Paseo</h1>
        <p>La rueda sólida es un tipo de rueda fabricada completamente en material sólido como poliuretano o goma. Ofrece una mayor durabilidad y resistencia, así como una mejor capacidad para mantener su forma original. Las ruedas sólidas para patinetes eléctricos son ideales para usuarios que buscan una experiencia de movilidad más estable y sin interrupciones en su camino.</p>
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
