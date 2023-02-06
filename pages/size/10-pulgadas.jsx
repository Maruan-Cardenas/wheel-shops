import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Inches10 = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('10 pulgadas'))
  return (
    <Layout
      title='Ruedas de 10 Pulgadas para Patinetes Eléctricos - Aumenta Tu Comodidad y Seguridad en el Camino'
      description='Las ruedas de 10 pulgadas son un tamaño de rueda ideal para patinetes eléctricos que requieren mayor estabilidad y comodidad en terrenos irregulares.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas de 10 Pulgadas para Patinetes Eléctricos - Aumenta Tu Comodidad y Seguridad en el Camino</h1>
        <p>Las ruedas de 10 pulgadas son un tamaño de rueda ideal para patinetes eléctricos que requieren mayor estabilidad y comodidad en terrenos irregulares. Al elegir ruedas de 10 pulgadas, podrás experimentar una mejor capacidad de absorción de impactos, una mayor velocidad y una mayor seguridad en tu camino..</p>
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

export default Inches10
