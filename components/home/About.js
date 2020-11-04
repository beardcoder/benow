import UiTabs from "../ui/Tabs";
import styles from "@styles/home/About.module.css";
import { Check } from "react-feather";

const tabs = [
  {
    title: "Fähigkeiten",
    content: (
      <div>
        <Check /> Hallo
      </div>
    ),
  },
  { title: "Erfahrung", content: "Haus" },
];

export default function HomeAbout() {
  return (
    <section id="about" className={styles.about}>
      <div className="container flex">
        <div className="w-1/2">
          <img
            src="/content/images/about.jpg"
            loading="lazy"
            className="h-auto max-w-full"
            alt="Webdesigner Markus Sommer"
            title="Webdesigner Markus Sommer"
            width="495"
            height="785"
          />
        </div>
        <div className="w-1/2">
          <h2 className={styles.title}>Über mich</h2>
          <div className={styles.text}>
            Mein Fokus und meine Leidenschaft sind auf die Benutzererfahrung
            (User Experience) gerichtet. Brauchst du Hilfe z. B. um deine
            Website in neuem Glanz erstrahlen zu lassen, Moderne Web
            Technologieren einzusetzen oder mal einen Tipp wie du eine Sitemap
            einrichtest?{" "}
            <a href="mailto:info@creativeworkspace.de">Dann schreibe mich an</a>
            . Ich stehe gerne mit Rat und Tat zur Seite.
          </div>
          <UiTabs tabs={tabs}></UiTabs>
        </div>
      </div>
    </section>
  );
}