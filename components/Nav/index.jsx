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
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Nav
