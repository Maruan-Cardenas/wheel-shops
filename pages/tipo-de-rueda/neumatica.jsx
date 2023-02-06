import AmazonArticle from '../../components/Iframe'
import Layout from '../../components/Layout'
import { ARTICLES } from '../../data/articles'
import styles from '../../styles/Home.module.scss'

const Neumatica = () => {
  const ARTICLE = ARTICLES.filter(fil => fil.tags.includes('neumatica'))
  return (
    <Layout
      title='Ruedas Neumáticas para Patinetes Eléctricos - Mejora Tu Experiencia de Movilidad Con Comodidad y Seguridad'
      description='La rueda neumática es un tipo de rueda que combina aire y caucho para ofrecer una mayor comodidad y suavidad en el camino. Al tener mayor capacidad de absorción de impactos, las ruedas neumáticas mejoran la estabilidad y seguridad en los paseos en patinete eléctrico. ¡Elige las ruedas neumáticas para una experiencia de movilidad más cómoda y sin interrupciones!'
    >
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas Neumáticas para Patinetes Eléctricos - Mejora Tu Experiencia de Movilidad Con Comodidad y Seguridad</h1>
        <p>La rueda neumática es un tipo de rueda que combina aire y caucho para ofrecer una mayor comodidad y suavidad en el camino. Al tener mayor capacidad de absorción de impactos, las ruedas neumáticas mejoran la estabilidad y seguridad en los paseos en patinete eléctrico. ¡Elige las ruedas neumáticas para una experiencia de movilidad más cómoda y sin interrupciones!</p>
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

export default Neumatica
