import styles from './Portfolio.module.css'
import { FiSearch, FiGithub, FiX } from 'react-icons/fi'
import classnames from 'classnames'
import UiCard from '../Ui/Card'
import useFuse from 'react-use-fuse'
import { forwardRef } from 'react'

export const HomePortfolio = forwardRef(({ repos, gists }, ref) => {
  const options = {
    keys: ['description', 'id'],
  }
  const { result, search, term, reset } = useFuse({
    data: gists,
    options,
  })

  return (
    <section ref={ref} id='portfolio' className={classnames(styles.portfolio)}>
      <div className='container'>
        <header className={styles.header}>
          <h2 className={styles.title}>Meine Projekte auf Github</h2>
        </header>
        <div className='flex flex-wrap justify-center -mx-4'>
          {repos.map((repo, index) => (
            <div
              key={`${repo.name}${index}`}
              className='w-full p-4 sm:1/2 md:w-1/3'
            >
              <UiCard
                tagName='a'
                className={classnames(styles.card, 'h-full')}
                href={repo.url}
                target='_blank'
                rel='noreferrer'
              >
                <FiGithub
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
        <header className={classnames(styles.header, 'mt-32')}>
          <h2 className={styles.title}>Snippets und Gists</h2>
          <p>
            Meine kleine Snippet Datenbank wird stetig erweitert und
            überarbeitet, da ich sie selbst jeden Tag produktiv nutze. Wenn du
            einen Fehler findest oder etwas verbessern kannst, dann nur her
            damit.
          </p>
        </header>
        <div className='flex justify-center mb-12'>
          <label htmlFor='search' className='sr-only'>
            Suche
          </label>
          <input
            id='search'
            className={classnames(styles.searchbar)}
            onChange={(e) => {
              search(e.target.value)
            }}
            value={term}
            placeholder='Suche in den Snippets...'
          />
          <div className={styles.searchbarIcon}>
            {term.length >= 1 && <FiX size="25" strokeWidth="1" className="transition-all duration-200 cursor-pointer hover:text-primary" onClick={reset} />}
            {term.length == 0 && <FiSearch size="25" strokeWidth="1" />}
          </div>
        </div>
        <div className='flex flex-wrap justify-center -mx-4'>
          {result.map((item) => (
            <div
              key={`${item.id ?? item.item.id}`}
              className='w-full p-4 sm:1/2 md:w-1/3'
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
})

export default HomePortfolio
