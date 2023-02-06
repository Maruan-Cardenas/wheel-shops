import Link from 'next/link'
import { useState } from 'react'
import { Arrow } from '../../svg'
import styles from './Nav.module.scss'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <div
        className={styles.section}
        onMouseEnter={() => setIsOpen('marca')}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.title} data-arrow='marca'> Marcas <Arrow /></div>
        {
          isOpen === 'marca' && (
            <ul>
              <li> <Link href='/marca/xiaomi'>Xiaomi</Link></li>
            </ul>
          )
        }
      </div>
      <div
        className={styles.section}
        onMouseEnter={() => setIsOpen('type')}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.title}>
          <span>Tipo de rueda</span>
          <Arrow />
        </div>
        {
          isOpen === 'type' && (
            <ul>
              <li> <Link href='/tipo-de-rueda/maciza'>Macizas</Link></li>
              <li> <Link href='/tipo-de-rueda/neumatica'>Neumáticas</Link></li>
            </ul>
          )
        }
      </div>
      <div
        className={styles.section}
        onMouseEnter={() => setIsOpen('size')}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.title}>
          <span>Tamaño de rueda</span>
          <Arrow />
        </div>
        {
          isOpen === 'size' && (
            <ul>
              <li> <Link href='/size/8.5-pulgadas'>8.5 pulgadas</Link></li>
              <li> <Link href='/size/10-pulgadas'>10 pulgadas</Link></li>
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Nav
