import AmazonArticle from '../components/Iframe'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import { ARTICLES } from '../data/articles'

export default function Home () {
  return (
    <Layout>
      <section className={styles.main}>
        <h1 className={styles.title}>Ruedas para patinetes eléctricos</h1>
        <p>
          En nuestra tienda encontrarás <span> las mejores ruedas para tu patinete eléctrico de las principales marcas como Xiaomi, Ninebot, Segway, entre otras.</span> Ofrecemos una amplia variedad de opciones de tamaño y diseño para adaptarse a tus necesidades de movilidad.
        </p>
        <div className={styles.iframe}>
          {
          ARTICLES.map((article, index) => (
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
