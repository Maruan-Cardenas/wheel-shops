import { useState } from 'react'
import Image from 'next/image'
import styles from './Iframe.module.scss'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  return `https://m.media-amazon.com/${src}?w=${width}&q=${quality || 75}`
}

const AmazonArticle = ({ iframe, image, title, description, link }) => {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <Link href={link}>
      <section className={styles.amazonArticle}>
        <h3>{title}</h3>
        <Image
          loader={myLoader}
          width={0}
          height={0}
          src={image}
          alt={title}
        />
        <div className={styles.description}>{description}</div>
        <button onClick={() => setSeeMore(!seeMore)}>
          'Ver más...'
        </button>
        <div className={styles.iframe} dangerouslySetInnerHTML={{ __html: iframe }} />
      </section>
    </Link>
  )
}

export default AmazonArticle
