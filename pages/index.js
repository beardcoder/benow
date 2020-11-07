import HomePortfolio from '@/components/Home/Portfolio'
import Head from 'next/head'
import HomeAbout from '../components/Home/About'
import HomeIntro from '../components/Home/Intro'
import UiNavigation from '../components/Ui/Navigation'
import styles from '../styles/Home.module.css'
import { Octokit } from '@octokit/rest'
import HomeBlog from '@/components/Home/Blog'
import { getAllPosts } from '@/lib/api'

export default function Home({ repos, gists, articles }) {
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
      <HomeBlog articles={articles} />
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

  const articles = getAllPosts(['title', 'createdAt', 'slug', 'image', 'type'])

  return {
    props: {
      repos,
      gists,
      articles,
    },
  }
}
