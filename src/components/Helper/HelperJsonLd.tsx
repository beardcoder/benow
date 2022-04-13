import { DefaultSeo, LogoJsonLd, NextSeo, SocialProfileJsonLd } from 'next-seo'

interface Props {}

export const HelperJsonLd = ({}: Props): JSX.Element => {
  return (
    <>
      <DefaultSeo
        title='Markus Sommer — Frontendartist & Webentwickler'
        description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
        openGraph={{
          type: 'website',
          locale: 'de_DE',
          url: 'https://www.creativeworkspace.de',
          site_name: 'CreativeWorkspace',
        }}
        twitter={{
          handle: '@beardcoder',
          site: '@beardcoder',
          cardType: 'summary_large_image',
        }}
      />
      <LogoJsonLd
        logo='https://www.creativeworkspace.de/creativeworkspace.svg'
        url='https://www.creativeworkspace.de'
      />
      <SocialProfileJsonLd
        type='Person'
        name='Markus Sommer'
        url='https://www.creativeworkspace.de'
        sameAs={[
          'https://www.instagram.com/markus.sommer/',
          'https://github.com/beardcoder',
          'https://twitter.com/beardcoder',
        ]}
      />
    </>
  )
}
