import { GetStaticProps } from 'next'

import { Article, Home } from '@/@types/api'
import { IRepo } from '@/@types/repo'
import { ISnippet } from '@/@types/snippet'
import AboutMe from '@/src/components/about-me'
import Articles from '@/src/components/articles'
import Hero from '@/src/components/hero'
import Layout from '@/src/components/layout'
import Projects from '@/src/components/projects'
import Repos from '@/src/components/repos'
import Snippets from '@/src/components/snippets'
import { getDirectusClient } from '@/src/utils/directus-client'
import { getAllArticles } from '@/src/utils/get-articles'
import { getRepos } from '@/src/utils/get-repos'
import { getSnippets } from '@/src/utils/get-snippets'

import { getAssetURL } from '../utils/get-asset-url'

type Props = {
  articles: Article[]
  home: Home
  repos: IRepo[]
  snippets: ISnippet[]
  projects: any
}

export default function Index({
  articles,
  repos,
  snippets,
  home,
  projects,
}: Props) {
  return (
    <Layout>
      <Hero image={getAssetURL(home.image)} id='intro' />
      <main>
        <AboutMe id='me' image={getAssetURL(home.avatar)} />
        <Projects projects={projects} id='projects' className='mb-32' />
        <Articles id='blog' articles={articles} className='mb-20' />
        <Repos id='repos' repos={repos} className='mb-20' />
        <Snippets id='snippets' snippets={snippets} className='mb-20' />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const articles = await getAllArticles(['slug', 'title', 'image', 'tags'])

  const directusClient = await getDirectusClient()
  const home = await directusClient.singleton('home').read()

  const { data: projects } = await directusClient
    .items('projects')
    .readByQuery()

  return {
    props: {
      repos,
      snippets,
      articles,
      home,
      projects,
    },
    revalidate: 10, // In seconds
  }
}
