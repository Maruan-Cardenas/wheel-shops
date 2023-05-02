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
        onMouseEnter={() => setIsOpen('category')}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.title}>
          <span>Recambios</span>
          <Arrow />
        </div>
        {
          isOpen === 'category' && (
            <ul>
              <li> <Link href='/recambios/ruedas'>Ruedas</Link></li>
              <li> <Link href='/recambios/baterias'>baterias</Link></li>
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
          <span>Reseñas</span>
          <Arrow />
        </div>
        {
          isOpen === 'size' && (
            <ul>
              <li>
                <Link href='/resenas/smartgyro-speedway'>
                  SmartGyro Speedway v3.0
                </Link>
              </li>
              <li>
                <Link href='/resenas/quickwheel-explorer'>
                  QuickWheel Explorer
                </Link>
              </li>
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Nav
