import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../../utils/svg'
import { myLoader } from '../myLoader'
import styles from './Card.module.scss'

const Card = ({ article }) => {
  return (
    <Link href={article.link} target='_blank' rel='noreferrer'>
      <article className={styles.card} key={article.id}>
        <Image loader={myLoader} width={0} height={0} src={article.image} alt={article.title} />
        <h2>{article.title}</h2>
        <p className={styles.price}>
          <Heading />
          <span>
            Comprar
          </span>
          {article.price},{article.cents}€
        </p>
      </article>
    </Link>
  )
}

export default Card
