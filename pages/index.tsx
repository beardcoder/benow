import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Octokit } from '@octokit/rest'
import HomeHeader from '@/components/Home/HomeHeader'
import { HomePersonal } from '@/components/Home/HomePersonal'
import HomeProjects from '@/components/Home/HomeProjects'
import LayoutPage from '@/components/Layout/LayoutPage'
import { getAllPosts } from '@/lib/blog'
import HomeBlog from '@/components/Home/HomeBlog'
import { IPostFields } from '@/@types/generated/contentful'
import { IRepo } from '@/@types/repo'
import { HomeRepos } from '@/components/Home/HomeRepos'
import { HomeSnippets } from '@/components/Home/HomeSnippets'
import { ISnippet } from '@/@types/snippet'

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
        <HomeProjects id='projects' />
        <HomeBlog id='blog' posts={posts} />
        <HomeRepos id='repos' repos={repos} />
        <HomeSnippets id='snippets' snippets={snippets} />
      </main>
    </LayoutPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
    userAgent: 'creativeworkspace',
  })

  const repos: IRepo[] = await octokit.repos
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

  const snippets = await octokit.gists
    .listForUser({
      username: 'beardcoder',
    })
    .then(({ data }: any) =>
      data.map((item: any) => {
        return {
          id: item.id,
          url: item.html_url,
          description: item.description,
        }
      })
    )

  const posts = (await getAllPosts()).map((post) => post.fields)

  return {
    props: {
      repos,
      snippets,
      posts,
    },
  }
}
