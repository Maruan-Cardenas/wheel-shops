import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        Tú Patinete
      </Link>
    </header>
  )
}

export default Header
