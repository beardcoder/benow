import { GetStaticProps } from 'next'

import Hero from '@/components/hero'
import Layout from '@/components/layout'
import { AboutMe } from '@/components/sections/about-me'
import { Articles } from '@/components/sections/articles'
import { Projects } from '@/components/sections/projects'
import { Repos } from '@/components/sections/repos'
import { Snippets } from '@/components/sections/snippets'
import { getDirectusClient } from '@/utils/directus-client'
import { getAllArticles } from '@/utils/get-articles'
import { getRepos } from '@/utils/get-repos'
import { getSnippets } from '@/utils/get-snippets'
import { IRepo } from '@@/@types/repo'
import { ISnippet } from '@@/@types/snippet'

import { getAssetURL } from '../utils/get-asset-url'

export default async function Index() {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const articles = await getAllArticles(['slug', 'title', 'image', 'tags'])

  const directusClient = await getDirectusClient()
  const home = await directusClient.singleton('home').read()

  const { data: projects } = await directusClient
    .items('projects')
    .readByQuery()
  return (
    <Layout>
      {home && (
        <>
          <Hero image={getAssetURL(home.image)} id='intro' />
          <AboutMe
            id='me'
            image={getAssetURL(home.avatar)}
            text={home.about_text}
          />
        </>
      )}
      {projects && (
        <Projects projects={projects} id='projects' className='mb-32' />
      )}
      <Articles id='blog' articles={articles} className='mb-20' />
      <Repos id='repos' repos={repos} className='mb-20' />
      <Snippets id='snippets' snippets={snippets} className='mb-20' />
    </Layout>
  )
}
