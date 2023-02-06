import Image from 'next/image'

type Props = { image: string } & JSX.IntrinsicElements['section']

export default function AboutMe({ ...props }) {
  const { image } = props
  return (
    <section className='relative z-30 mx-auto md:flex max-w-screen-2xl' data-cy='personal' {...props}>
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
            Hi, ich bin <span className='pb-1 text-gradient'>Markus Sommer&nbsp;</span>
          </h2>
          <p className='max-w-3xl text-lg prose dark:prose-invert text-opacity-70'>
            Lass mich dir helfen, deine Online-Präsenz auf die nächste Stufe zu bringen! Meine Leidenschaft für die
            Benutzererfahrung (User Experience) brennt lichterloh und ich bin bereit, all mein Wissen und meine
            Erfahrung in dein Projekt zu investieren. Sei es durch eine Auffrischung deiner Website mit modernen
            Web-Technologien, die Einrichtung einer Sitemap oder jeglichen anderen Rat, den du benötigst. Schreib mir
            jetzt und lass uns gemeinsam dein Ziel erreichen!
          </p>
        </div>
      </div>
    </section>
  )
}
