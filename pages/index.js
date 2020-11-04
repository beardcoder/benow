import HomePortfolio from '@/components/home/Portfolio'
import Head from 'next/head'
import HomeAbout from '../components/home/About'
import HomeIntro from '../components/home/Intro'
import UiNavigation from '../components/ui/Navigation'
import styles from '../styles/Home.module.css'
import { Octokit } from '@octokit/rest'

export default function Home({ repos, gists }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <UiNavigation />
      </header>
      <HomeIntro />
      <HomeAbout />
      <HomePortfolio repos={repos} gists={gists} />
    </div>
  )
}

export const getStaticProps = async () => {
  const octokit = new Octokit({
    auth: '24b695afae0050c1e79c0420906936c9c25c7c51',
    userAgent: 'creativeworkspace',
  })

  const repos = await octokit.repos
    .listForUser({
      username: 'beardcoder',
    })
    .then(({ data }) =>
      data
        .filter((item) => !item.fork)
        .map((item) => {
          return {
            id: item.id,
            url: item.html_url,
            name: item.name,
            description: item.description,
          }
        })
    )

  const gists = await octokit.gists
    .listForUser({
      username: 'beardcoder',
    })
    .then(({ data }) =>
      data.map((item) => {
        return {
          id: item.id,
          url: item.html_url,
          description: item.description,
        }
      })
    )

  return {
    props: {
      repos,
      gists,
    },
  }
}
