import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import logo from '../../public/images/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src={logo} alt='Tú patinete.site' />
      </Link>
    </header>
  )
}

export default Header
