import classNames from 'classnames'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { useMenu } from '../../../hooks/useApp'
import { UiMenuButton } from './UiMenuButton'
import Router from 'next/router'

type Props = {}

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
          <Link href='/#intro'>
            <a
              onClick={() => toggleOpen(false)}
              className='text-4xl font-bold text-white uppercase'
            >
              Intro
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}
