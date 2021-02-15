import React from "react"
import ExtLink from "../components/ext-link.tsx"

import GitHub from '../components/svgs/github.tsx'
import Twitter from '../components/svgs/twitter.tsx'
import Envelope from '../components/svgs/envelope.tsx'
import LinkedIn from '../components/svgs/linkedin.tsx'

const Contacts = () => {
  const contacts = [
    {
      Comp: Twitter,
      alt: 'twitter',
      link: 'https://twitter.com/kosukeohmura',
    },
    {
      Comp: GitHub,
      alt: 'github',
      link: 'https://github.com/KosukeOhmura',
    },
    {
      Comp: LinkedIn,
      alt: 'linkedin',
      link: 'https://www.linkedin.com/in/kosukeohmura/',
    },
    {
      Comp: Envelope,
      alt: 'envelope',
      link: 'mailto:bnpb81@gmail.com',
    },
  ]

  return (
    <div className="contacts">
      {contacts.map(({ Comp, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Comp height={26} />
          </ExtLink>
        )
      })}
    </div>
  )
}

export default Contacts
