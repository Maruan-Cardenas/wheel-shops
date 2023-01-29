import { useState } from 'react'
import Image from 'next/image'
import styles from './Iframe.module.scss'
import { motion } from 'framer-motion'
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
        <motion.ul
          animate={{ height: seeMore ? 'auto' : '9rem' }}
          transition={{ duration: 1 }}
        >
          {
          description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))
        }
        </motion.ul>
        <button onClick={() => setSeeMore(!seeMore)}>
          {
          seeMore ? 'Ver menos' : 'Ver más...'
        }
        </button>
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      </section>
    </Link>
  )
}

export default AmazonArticle
