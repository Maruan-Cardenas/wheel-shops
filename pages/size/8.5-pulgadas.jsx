import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Inches85 = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('8.5 pulgadas'))
  return (
    <Layout
      title='Ruedas de 8.5 Pulgadas para Patinetes Eléctricos - Aumenta Tu Comodidad y Seguridad en el Camino'
      description='Las ruedas de 8.5 pulgadas son un tamaño de rueda que ofrece una mejor estabilidad y una mayor capacidad de absorción de impactos en comparación con las ruedas más pequeñas.'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas de 8.5 Pulgadas para Patinetes Eléctricos - Aumenta Tu Comodidad y Seguridad en el Camino</h1>
        <p>Las ruedas de 8.5 pulgadas son un tamaño de rueda que ofrece una mejor estabilidad y una mayor capacidad de absorción de impactos en comparación con las ruedas más pequeñas. Al elegir ruedas de 8.5 pulgadas para tu patinete eléctrico, disfrutarás de una experiencia de movilidad más cómoda y segura en cada paseo.</p>
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
