import * as React from 'react';
import styles from './Projects.css';
import { GithubItem } from '../../interfaces';
import PageGithubList from '../GithubIList/GithubList';

type Props = {
    repos: GithubItem[];
    gists: GithubItem[];
};

const PageProjects: React.FunctionComponent<Props> = ({ repos, gists }) => (
    <section id="projects" className={styles.projects}>
        <header className={styles.projectsHeader}>
            <h2>Projekte und Snippets die mir und vielleicht auch dir helfen können.</h2>
            <p>
                Hast du dich schon einmal gefragt wie Manche Menschen so schnell
                Programmieren können? Oder fehlt dir Inspiration zu einem
                kleinen Bereich deiner Seite?
            </p>
            <p>Hier findest du alles, was einem Das Leben leichter macht 😊</p>
            <p>
                Meine kleine Snippet Datenbank wird Stetig erweitert und
                überarbeitet, da ich sie Selbst jeden Tag Produktiv nutze. Wenn
                du einen Fehler findest oder etwas verbessern kannst dann nur
                her damit.
            </p>
        </header>
        <div id="repositories">
            <PageGithubList
                linkText="zum Repo"
                title="Repositories"
                items={repos}
            />
        </div>
        <div id="snippets">
            <PageGithubList
                linkText="zum Snippet"
                title="Snippets"
                items={gists}
                gist
            />
        </div>
    </section>
);

export default PageProjects;
