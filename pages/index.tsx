import { NextSeo } from 'next-seo'
import HomeHeader from '../components/Home/HomeHeader'
import { HomePersonal } from '../components/Home/HomePersonal'
import HomeProjects from '../components/Home/HomeProjects'
import LayoutPage from '../components/Layout/LayoutPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <LayoutPage>
      <NextSeo
        title='Markus Sommer — Frontendartist & Webentwickler'
        description='Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend'
      />
      <HomeHeader id='intro' />
      <main>
        <HomePersonal id='personal' />
        <HomeProjects id='projects' />
      </main>
    </LayoutPage>
  )
}
