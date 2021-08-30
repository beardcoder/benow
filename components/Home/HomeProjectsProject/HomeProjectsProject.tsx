import { UiButton } from '@/components/Ui/Button/UiButton'
import IProject from '../../../@types/project'
import UiTag from '../../Ui/Tag/UiTag'
type Props = {
  project: IProject
  className?: string
} & JSX.IntrinsicElements['div']

export const HomeProjectsProject = ({ project, ...props }: Props) => {
  return (
    <div {...props}>
      <a
        href={project.link}
        className='block mb-5 text-xl font-bold text-white uppercase md:text-center md:text-2xl'
      >
        {project.name}
      </a>
      <div className='md:text-center'>
        {project.tech.map((ele, y) => (
          <UiTag light key={y}>
            {ele}
          </UiTag>
        ))}
        <UiButton className='mt-4' tagName='a' href={project.link} small>
          Zum {project.name} Projekt
        </UiButton>
      </div>
    </div>
  )
}
