import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import Layout from '../components/Layout'
import { myLoader } from '../components/myLoader'
import { useGetAllArticles } from '../firebase/methods/get'
import quickWheelExplorer from '../public/resenas/quickwheel-explorer/quickwheel-explorer-2.jpg'
import smartgyroSpeedway from '../public/resenas/smartgyro-speedway/smartgyro-speedway-11.jpg'
import xiaomiScooter3Lite from '../public/resenas/xiaomi-electric-scooter-3-lite/xiaomi-electric-scooter-3-lite-2.jpg'
import batteries from '../public/spare-parts/batteries/batterie.jpg'
import wheel from '../public/spare-parts/wheel/rueda.jpg'
import styles from '../styles/Home.module.scss'

export default function Home () {
  const articles = useGetAllArticles('articles')
  const articlesPatinetes = articles.filter((article) => article.category === 'patinetes')
  return (
    <Layout
      title='Mejores patinetes eléctricos del 2023'
      description='Muévete con total libertad por tu ciudad, ahorrando en consumo y sin atascos con tú nuevo patinete eléctrico. En nuestra tienda encontrarás los mejores patinetes de todas las marcas, ademas de los mejores recambio. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...'
    >
      <section className={styles.head}>
        <h1 className={styles.title}>¿Buscas un patinete eléctrico?</h1>
        <p className={styles.paragraph}>Muévete con total libertad por tu ciudad, ahorrando en consumo y sin atascos con tú nuevo patinete. <strong>patinete eléctrico.</strong></p>
        <p className={styles.paragraph}>
          En nuestra tienda encontrarás los mejores patinetes de todas las marcas, ademas de los mejores recambio. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...
        </p>
      </section>
      <section className={styles.reviews}>
        <h2 className={styles.title}>Análisis de los mejores scooters eléctricos del 2023</h2>
        <div className={styles.reviewsContainer}>
          <article className={styles.review}>
            <Link href='/resenas/smartgyro-speedway'>
              <h3>Smartgyro Speedway v3.0</h3>
              <Image width={0} height={0} loader={myLoader} src={smartgyroSpeedway} alt='Smartgyro Speedway' />
            </Link>
          </article>
          <article className={styles.review}>
            <Link href='/resenas/quickwheel-explorer'>
              <h3>QuickWheel Explorer</h3>
              <Image width={0} height={0} loader={myLoader} src={quickWheelExplorer} alt='Smartgyro Speedway' />
            </Link>
          </article>
          <article className={styles.review}>
            <Link href='/resenas/xiaomi-electric-scooter-3-lite'>
              <h3>Xiaomi Scooter 3 Lite</h3>
              <Image width={0} height={0} loader={myLoader} src={xiaomiScooter3Lite} alt='Xiaomi Electric Scooter 3 Lite' />
            </Link>
          </article>
        </div>
      </section>
      <section className={styles.products}>
        <h2 className={styles.title}>Patinetes eléctricos más vendidos</h2>
        <p className={styles.description}>Estos son los <strong>Patinetes Eléctricos</strong> más vendidos. Haz clic en ellos para conocer sus características o leer las opiniones de los usuarios.</p>
        <div className={styles.cardBox}>
          {
            articlesPatinetes.map((article) => (
              <Card article={article} key={article.id} h3 />
            ))
          }
        </div>
      </section>
      <section className={styles.spareParts}>
        <h2 className={styles.title}>Recambios para Patinetes eléctricos</h2>
        <p className={styles.description}>¿Necesitas un recambio para tu patinete eléctrico? Aquí encontrarás los mejores recambios para tu patinete eléctrico.</p>
        <div className={styles.partsBox}>
          <article className={styles.parts}>
            <Link href='/recambios/baterias'>
              <h3>Baterias para Scooter</h3>
              <Image width={0} height={0} loader={myLoader} src={batteries} alt='Bateria para Patinete Electrico' />
            </Link>
          </article>
          <article className={styles.parts}>
            <Link href='/recambios/ruedas'>
              <h3>Ruedas para Scooter</h3>
              <Image width={0} height={0} loader={myLoader} src={wheel} alt='Ruedas para Patinete Electrico' />
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}
