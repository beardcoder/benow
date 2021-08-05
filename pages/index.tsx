import { NextSeo } from "next-seo";
import Image from "next/image";
import HomeHeader from "../components/Home/HomeHeader";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Markus Sommer — Frontendartist & Webentwickler"
        description="Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend"
      />
      <HomeHeader />
      <main className={styles.main}></main>
    </>
  );
}
