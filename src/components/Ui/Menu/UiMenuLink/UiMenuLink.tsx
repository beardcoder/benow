import Link from 'next/link'

type Props = {
  link: any
  toggleOpen: any
} & JSX.IntrinsicElements['a']

export const UiMenuLink = ({ link, toggleOpen, ...props }: Props) => {
  return (
    <Link
      href={`/#${link.id}`}
      onClick={() => toggleOpen(false)}
      className='block py-5 text-4xl font-bold text-white uppercase hover:text-gradient'
      {...props}
    >
      {link.title}
      <style jsx>{`
        a {
          font-size: 6vh;
          line-height: 1;
          padding-top: 3vh;
          padding-bottom: 3vh;
        }
      `}</style>
    </Link>
  )
}
