import Link from 'next/link'

type Props = {
  link: any
  toggleOpen: any
} & JSX.IntrinsicElements['a']

export const UiMenuLink = ({ link, toggleOpen, ...props }: Props) => {
  return (
    <Link href={`/#${link.id}`}>
      <a
        onClick={() => toggleOpen(false)}
        className='block py-5 text-4xl font-bold text-white uppercase hover:text-gradient'
        {...props}
      >
        {link.title}
      </a>
    </Link>
  )
}
