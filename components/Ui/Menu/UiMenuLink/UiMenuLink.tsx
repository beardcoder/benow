import Link from 'next/link'

interface Props {
  link: any
  toggleOpen: any
}

export const UiMenuLink = ({ link, toggleOpen }: Props) => {
  return (
    <Link href={`/#${link.id}`}>
      <a
        onClick={() => toggleOpen(false)}
        className='block py-5 text-4xl font-bold text-white uppercase'
      >
        {link.title}
      </a>
    </Link>
  )
}
