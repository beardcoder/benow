import { getAssetURL } from '@/utils/get-asset-url'
import Hero from '../components/sections/hero'
import { cache } from 'react'
import { client } from '@/utils/directus-client'
import { readItems, readSingleton } from '@directus/sdk'
import AboutMe from '../components/sections/about-me'
import Projects from '../components/sections/projects'
import Blog from '../components/sections/blog'

const getData = cache(async () => await client.request(readSingleton('home')))

const getProjects = cache(
  async () => await client.request(readItems('projects')),
)
const getArticles = cache(
  async () => await client.request(readItems('articles')),
)

export default async function Home() {
  const data = await getData()
  const projects = await getProjects()
  const articles = await getArticles()

  return (
    <main>
      <Hero image={getAssetURL(data.image)} id="intro" />
      <AboutMe
        id="me"
        image={getAssetURL(data.avatar)}
        text={data.about_text}
      />
      <Projects projects={projects} />
      <Blog articles={articles} />
    </main>
  )
}
