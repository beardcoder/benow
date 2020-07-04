import { GithubItem } from '@@/types';

import GithubList from './GithubList';
import Section from './Section';

type Props = {
    repos?: GithubItem[];
    snippets?: GithubItem[];
};

const description = function () {
    return (
        <>
            <p>
                Hast du dich schon einmal gefragt, wie manche Menschen so schnell programmieren
                können? Oder fehlt dir die Inspiration zu einem kleinen Bereich deiner Seite?
            </p>
            <p>Hier findest du alles, was einem das Leben leichter macht 😊</p>
            <p>
                Meine kleine Snippet Datenbank wird stetig erweitert und überarbeitet, da ich sie
                selbst jeden Tag produktiv nutze. Wenn du einen Fehler findest oder etwas verbessern
                kannst, dann nur her damit.
            </p>
        </>
    );
};

export default function Projects({ repos, snippets }: Props) {
    return (
        <Section
            title='Projekte und Snippets die mir und vielleicht auch dir helfen können.'
            description={description()}
            second>
            <>
                <div id='repositories'>
                    <GithubList items={repos} linkText='zum Repo' title='Repositories' />
                </div>
                <div id='snippets' className='snippets'>
                    <GithubList items={snippets} gist linkText='zum Snippet' title='Snippets' />
                </div>
            </>
        </Section>
    );
}
