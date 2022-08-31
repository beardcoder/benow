import { UiButton } from '@/src/components/Ui/Button/UiButton'
import { Project } from '@/src/utils/directus-client'
import UiTag from '../../Ui/Tag/UiTag'
type Props = {
  project: Project
  className?: string
} & JSX.IntrinsicElements['div']

export const HomeProjectsProject = ({ project, ...props }: Props) => {
  return (
    <div {...props}>
      <h3 className='block mb-5 text-xl font-bold uppercase md:text-center md:text-2xl'>
        {project.name}
      </h3>
      <div className='md:text-center'>
        {project.keywords.map((ele, y) => (
          <UiTag key={y}>{ele}</UiTag>
        ))}
        {project.url && (
          <UiButton
            target='_blank'
            className='mt-4'
            tagName='a'
            href={project.url}
            small
          >
            Zum {project.name} Projekt
          </UiButton>
        )}
      </div>
    </div>
  )
}
