import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { useMenu } from '../../../hooks/useApp'
import { UiMenuButton } from './UiMenuButton'
import { UiMenuLink } from './UiMenuLink/UiMenuLink'

type Props = {}

const nav = [
  {
    title: 'Intro',
    id: 'intro',
  },
  {
    title: 'Über mich',
    id: 'me',
  },
  {
    title: 'Projekte',
    id: 'projects',
  },
  {
    title: 'Blog',
    id: 'blog',
  },
  {
    title: 'Repositories',
    id: 'repos',
  },
  {
    title: 'Snippets',
    id: 'snippets',
  },
]

export const UiMenu: FunctionComponent<Props> = (): JSX.Element => {
  const { open, toggleOpen } = useMenu(false)
  return (
    <div className='absolute top-0 right-0 z-50'>
      <UiMenuButton open={open} toogle={toggleOpen} className='relative z-50' />
      <div
        className={classNames(
          'fixed flex left-0 right-0 h-full bg-black transition-all duration-200',
          open ? 'top-0' : '-top-full'
        )}
      >
        <nav className='mx-auto my-auto text-center'>
          {nav.map((link, i) => (
            <UiMenuLink key={i} link={link} toggleOpen={toggleOpen} />
          ))}
        </nav>
      </div>
    </div>
  )
}
