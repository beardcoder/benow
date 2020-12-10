import styles from './Footer.module.css'
import { FiCoffee } from 'react-icons/fi'
import { GiUnicorn } from 'react-icons/gi'
export default function GlobalFooter() {
  return (
    <footer>
      {/* <div className={styles.footer1}>
        <div className='container flex justify-center'>
          <div className='mr-4 w-80'>
            <h4 className='mb-2'>Headline noch schreiben</h4>
            <p>
              Kiah Bratzn Bisgurn Butzelküah Diridaari Dockal Wihsch. Ebban Bua
              machad gnaaht ellerbätsch. Gschert darenna dorat Luada Hornochs.
              Gwieft Hohdan kaannt Schuxn eahm Surri Heigeign. Muas waar ebbs
              liab boid grohskopfat z’ weng.
            </p>
          </div>
          <div className='ml-4 w-80'>
            <h4 className='mb-2'>Headline noch schreiben</h4>
            <p>
              Kiah Bratzn Bisgurn Butzelküah Diridaari Dockal Wihsch. Ebban Bua
              machad gnaaht ellerbätsch. Gschert darenna dorat Luada Hornochs.
              Gwieft Hohdan kaannt Schuxn eahm Surri Heigeign. Muas waar ebbs
              liab boid grohskopfat z’ weng.
            </p>
          </div>
        </div>
      </div> */}
      <div className={styles.footer2}>
        <div className='container text-center'>
          Markus Sommer since 1984, 100% Made with{' '}
          <FiCoffee
            height='17'
            style={{ bottom: '2px' }}
            className='relative inline-block'
          />{' '}
          and{' '}
          <GiUnicorn
            height='17'
            style={{ bottom: '2px' }}
            className='relative inline-block mx-1'
          />
          in <span className={styles.highlight}>Bavaria</span>
        </div>
      </div>
    </footer>
  )
}
