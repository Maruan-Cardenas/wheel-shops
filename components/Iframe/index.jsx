import Image from 'next/image'
import Link from 'next/link'
import styles from './Iframe.module.scss'

const myLoader = ({ src, width, quality }) => {
  return `https://m.media-amazon.com/${src}?w=${width}&q=${quality || 75}`
}

const AmazonArticle = ({ iframe, image, title, link }) => {
  return (
    <Link href={link} target='_black'>
      <section className={styles.amazonArticle}>
        <h3>{title}</h3>
        <Image
          loader={myLoader}
          width={0}
          height={0}
          src={image}
          alt={title}
        />
        <div className={styles.iframe} dangerouslySetInnerHTML={{ __html: iframe }} />
      </section>
    </Link>
  )
}

export default AmazonArticle
