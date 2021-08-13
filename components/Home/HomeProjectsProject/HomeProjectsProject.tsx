import IProject from '../../../@types/project'
import UiTag from '../../Ui/Tag/UiTag'
interface Props {
  project: IProject
  className?: string
}

export const HomeProjectsProject = ({ project, className }: Props) => {
  return (
    <div className={className}>
      <a
        href={project.link}
        className='block mb-5 text-xl font-bold uppercase md:text-center md:text-2xl text-primary'
      >
        {project.name}
      </a>
      <div className='md:text-center'>
        {project.tech.map((ele, y) => (
          <UiTag light key={y}>
            {ele}
          </UiTag>
        ))}
      </div>
    </div>
  )
}
