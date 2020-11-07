import { useState } from 'react'
import styles from '@styles/ui/Tabs.module.css'
import classnames from 'classnames'

export default function UiTabs({ tabs }) {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-3 flex-row">
          {tabs.map(({ title }, index) => (
            <li key={`tab-${index}__title`}>
              <a
                onClick={() => setActive(index)}
                className={classnames(
                  styles.tab,
                  active === index ? styles.active : ''
                )}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className="py-3 flex-auto">
            <div className="tab-content tab-space">
              {tabs.map(({ content }, index) => (
                <div
                  key={`tab-${index}__title`}
                  className={active === index ? 'block' : 'hidden'}
                >
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
