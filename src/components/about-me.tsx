import Image from 'next/image'

type Props = { image: string } & JSX.IntrinsicElements['section']

export default function AboutMe({ ...props }) {
  const { image } = props
  return (
    <section
      className='relative z-30 mx-auto md:flex max-w-screen-2xl'
      data-cy='personal'
      {...props}
    >
      <div className='w-full mr-20 md:w-1/2'>
        <Image
          data-cy='personalImage'
          src={`${image}?width=600&height=600`}
          width='600'
          height='600'
          alt='Markus Sommer'
        ></Image>
      </div>
      <div className='w-full px-5 my-auto mt-10 mb-20 md:mt-auto md:w-1/2 md:mb-auto'>
        <div className='relative z-10 flex flex-col mx-auto'>
          <h2 className='mb-5 text-4xl font-bold md:text-5xl'>
            Hi, ich bin{' '}
            <span className='pb-1 text-gradient'>Markus Sommer&nbsp;</span>
          </h2>
          <p className='max-w-3xl text-lg prose dark:prose-invert text-opacity-70'>
            Als UX-Profi bringe ich Fachwissen und Erfahrung in dein Projekt, um
            deine Online-Präsenz zu optimieren. Meine Leidenschaft für die
            Benutzererfahrung und mein tiefes Verständnis für moderne
            Web-Technologien helfen dir, deine Website an die Bedürfnisse deiner
            Zielgruppe anzupassen. Egal, ob du eine Auffrischung deiner Website
            mit modernen Funktionen benötigst, eine benutzerfreundliche Sitemap
            einrichten möchtest oder jeglichen anderen Rat brauchst, ich bin
            bereit, dich zu unterstützen. Schreibe mir jetzt und lass uns
            gemeinsam an deinem Erfolg arbeiten. Mit meiner Unterstützung kannst
            du dein Ziel erreichen und deine Online-Präsenz auf ein neues Level
            bringen.
          </p>
        </div>
      </div>
    </section>
  )
}
