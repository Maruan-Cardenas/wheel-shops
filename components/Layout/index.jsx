import styles from './Layout.module.scss'

import Head from 'next/head'
import Header from '../Header'
import Nav from '../Nav'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='google-site-verification' content='q7bMf_Dn9D3CnBXQIHL1HqITl8waqLsWQaK7pnxNj9Y' />
      </Head>
      <Header />
      <Nav />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
