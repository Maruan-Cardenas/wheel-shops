import { useRef } from 'react'
import Layout from '../../components/Layout'
import { setArticle } from '../../firebase/methods/set/setArticles'
import styles from './Gestion.module.scss'

const Gestion = () => {
  const refForm = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setArticle(refForm.current)
  }
  
  return (
    <Layout>
      <section className={styles.gestion}>
        <h1>Gestion</h1>
        <form ref={refForm} onSubmit={handleSubmit}>
          <input type='text' name='title' placeholder='Titulo' />
          <input type='text' name='image' placeholder='Imagen' />
          <input type='number' name='price' placeholder='Precio' />
          <input type='text' name='link' placeholder='Enlace' />
          <button type='submit'>Enviar</button>
        </form>
      </section>
    </Layout>
  )
}

export default Gestion
