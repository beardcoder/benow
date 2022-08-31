import { GetStaticProps } from 'next'

import { Article, Home } from '@/@types/api'
import { IRepo } from '@/@types/repo'
import { ISnippet } from '@/@types/snippet'
import { HomeBlog } from '@/src/components/Home/HomeBlog'
import { HomeHeader } from '@/src/components/Home/HomeHeader'
import { HomePersonal } from '@/src/components/Home/HomePersonal'
import { HomeProjects } from '@/src/components/Home/HomeProjects'
import { HomeRepos } from '@/src/components/Home/HomeRepos'
import { HomeSnippets } from '@/src/components/Home/HomeSnippets'
import { LayoutPage } from '@/src/components/Layout/LayoutPage'
import { getDirectusClient } from '@/src/utils/directus-client'
import { getAllPosts } from '@/src/utils/get-blog'
import { getRepos } from '@/src/utils/get-repos'
import { getSnippets } from '@/src/utils/get-snippets'

import { getAssetURL } from '../utils/get-asset-url'

type Props = {
  posts: Article[]
  home: Home
  repos: IRepo[]
  snippets: ISnippet[]
  projects: any
}

export default function Index({
  posts,
  repos,
  snippets,
  home,
  projects,
}: Props) {
  return (
    <LayoutPage>
      <HomeHeader image={getAssetURL(home.image)} id='intro' />
      <main>
        <HomePersonal id='me' image={getAssetURL(home.avatar)} />
        <HomeProjects projects={projects} id='projects' className='mb-32' />
        <HomeBlog id='blog' posts={posts} className='mb-20' />
        <HomeRepos id='repos' repos={repos} className='mb-20' />
        <HomeSnippets id='snippets' snippets={snippets} className='mb-20' />
      </main>
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const posts = await getAllPosts(['slug', 'title', 'image', 'tags'])

  const directusClient = await getDirectusClient()
  const home = await directusClient.singleton('home').read()

  const { data: projects } = await directusClient
    .items('projects')
    .readByQuery()

  return {
    props: {
      repos,
      snippets,
      posts,
      home,
      projects,
    },
  }
}
