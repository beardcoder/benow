import { twMerge } from 'tailwind-merge'

type Props = {
  light?: boolean
} & JSX.IntrinsicElements['div']

export default function Tag({ children, light = false, ...props }: Props) {
  return (
    <div
      className={twMerge(
        'inline-block px-4 py-1 mb-4 mr-4 text-sm  rounded-full bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black',
      )}
      {...props}
    >
      {children}
    </div>
  )
}
