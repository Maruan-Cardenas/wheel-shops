import Script from 'next/script'

const GoogleAds = () => {
  return (
    <>
      <Script
        id='my-script'
        async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4272631115818771'
        crossorigin='anonymous'
      />
      <ins
        class='adsbygoogle'
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-client='ca-pub-4272631115818771'
        data-ad-slot='7018102162'
      />
      <Script id='my-script'>
        {`
      (adsbygoogle = window.adsbygoogle || []).push({});
      `}
      </Script>
    </>
  )
}

export default GoogleAds
