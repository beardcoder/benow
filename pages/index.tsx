import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import HomeHeader from '@/components/Home/HomeHeader'
import { HomePersonal } from '@/components/Home/HomePersonal'
import HomeProjects from '@/components/Home/HomeProjects'
import LayoutPage from '@/components/Layout/LayoutPage'
import { getAllPosts } from '@/services/blog'
import HomeBlog from '@/components/Home/HomeBlog'
import { IPostFields } from '@/@types/generated/contentful'
import { IRepo } from '@/@types/repo'
import { HomeRepos } from '@/components/Home/HomeRepos'
import { HomeSnippets } from '@/components/Home/HomeSnippets'
import { ISnippet } from '@/@types/snippet'
import getRepos from '@/services/repos'
import getSnippets from '@/services/snippets'

type Props = {
  posts: IPostFields[]
  repos: IRepo[]
  snippets: ISnippet[]
}

export default function Home({ posts, repos, snippets }: Props) {
  return (
    <LayoutPage>
      <NextSeo
        title='Markus Sommer — Frontendartist & Webentwickler'
        description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
      />
      <HomeHeader id='intro' />
      <main>
        <HomePersonal id='me' />
        <HomeProjects id='projects' className='mb-32' />
        <HomeBlog id='blog' posts={posts} className='mb-32' />
        <HomeRepos id='repos' repos={repos} className='mb-32' />
        <HomeSnippets id='snippets' snippets={snippets} className='mb-32' />
      </main>
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const repos: IRepo[] = await getRepos()
  const snippets: ISnippet[] = await getSnippets()
  const posts: IPostFields[] = await getAllPosts()

  return {
    props: {
      repos,
      snippets,
      posts,
    },
  }
}
