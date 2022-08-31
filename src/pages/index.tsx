import { GetStaticProps } from 'next'

import { Article } from '@/@types/api'
import { IRepo } from '@/@types/repo'
import { ISnippet } from '@/@types/snippet'
import { HomeBlog } from '@/src/components/Home/HomeBlog'
import { HomeHeader } from '@/src/components/Home/HomeHeader'
import { HomePersonal } from '@/src/components/Home/HomePersonal'
import { HomeProjects } from '@/src/components/Home/HomeProjects'
import { HomeRepos } from '@/src/components/Home/HomeRepos'
import { HomeSnippets } from '@/src/components/Home/HomeSnippets'
import { LayoutPage } from '@/src/components/Layout/LayoutPage'
import { directusClient } from '@/src/utils/directus-client'
import { getAllPosts } from '@/src/utils/get-blog'
import { getRepos } from '@/src/utils/get-repos'
import { getSnippets } from '@/src/utils/get-snippets'

type Props = {
  posts: Article[]
  repos: IRepo[]
  snippets: ISnippet[]
  avatar: string
  projects: any
}

export default function Home({
  posts,
  repos,
  snippets,
  avatar,
  projects,
}: Props) {
  return (
    <LayoutPage>
      <HomeHeader id='intro' />
      <main>
        <HomePersonal id='me' image={avatar} />
        <HomeProjects projects={projects} id='projects' className='mb-32' />
        <HomeBlog id='blog' posts={posts} className='mb-20' />
        <HomeRepos id='repos' repos={repos} className='mb-20' />
        <HomeSnippets id='snippets' snippets={snippets} className='mb-20' />
      </main>
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const posts = await getAllPosts(['slug', 'title', 'image', 'tags'])

  const home = await directusClient.singleton('home').read()

  const { data: projects } = await directusClient
    .items('projects')
    .readByQuery()

  return {
    props: {
      repos,
      snippets,
      posts,
      avatar: home?.avatar,
      projects,
    },
  }
}
