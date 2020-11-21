import styles from './Portfolio.module.css'
import { GitHub, Search } from 'react-feather'
import classnames from 'classnames'
import UiCard from '../Ui/Card'
import useFuse from 'react-use-fuse'

export default function HomePortfolio({ repos, gists }) {
  const options = {
    keys: ['description', 'id'],
  }
  const { result, search, term, reset } = useFuse({
    data: gists,
    options,
  })

  return (
    <section id='portfolio' className={classnames(styles.portfolio)}>
      <div className='container'>
        <header className={styles.header}>
          <h2 className={styles.title}>Meine Projekte auf Github</h2>
        </header>
        <div className='flex flex-wrap -mx-4 justify-center'>
          {repos.map((repo, index) => (
            <div
              key={`${repo.name}${index}`}
              className='w-full sm:1/2 md:w-1/3 p-4'
            >
              <UiCard
                tagName='a'
                className={classnames(styles.card, 'h-full')}
                href={repo.url}
                target='_blank'
                rel='noreferrer'
              >
                <GitHub
                  size='40'
                  className={classnames(
                    styles.icon,
                    'text-primary mb-3 transition-colors duration-200'
                  )}
                />
                <h4 className={classnames('text-lg text-white mb-2')}>
                  {repo.name}
                </h4>
                <div className={classnames('text-sm')}>{repo.description}</div>
              </UiCard>
            </div>
          ))}
        </div>
        <header className={classnames(styles.header, 'mt-20')}>
          <h2 className={styles.title}>Snippets und Gists</h2>
          <p>
            Meine kleine Snippet Datenbank wird stetig erweitert und
            überarbeitet, da ich sie selbst jeden Tag produktiv nutze. Wenn du
            einen Fehler findest oder etwas verbessern kannst, dann nur her
            damit.
          </p>
        </header>
        <div className='flex justify-center mb-12'>
          <input
            className={classnames(styles.searchbar)}
            onChange={(e) => {
              search(e.target.value)
            }}
            value={term}
            placeholder='Suche in den Snippets...'
          />
          <div className={styles.searchbarIcon}>
            <Search />
          </div>
        </div>
        <div className='flex flex-wrap -mx-4 justify-center'>
          {result.map((item) => (
            <div
              key={`${item.id ?? item.item.id}`}
              className='w-full sm:1/2 md:w-1/3 p-4'
            >
              <UiCard
                small
                tagName='a'
                className={classnames(styles.card, 'h-full')}
                href={item.url ?? item.item.url}
                target='_blank'
                rel='noreferrer'
              >
                <h4 className={classnames('text-base text-white')}>
                  {item.description ?? item.item.description}
                </h4>
              </UiCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
