import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import '../styles/globals.css'

export default function App ({ Component, pageProps }) {
  const key = process.env.NEXT_PUBLIC_ANALYTICS_ID
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${key}`}
      />
      <Script strategy='lazyOnload' id='my-script'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${key}');
        `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}  
