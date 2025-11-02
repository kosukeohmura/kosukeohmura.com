import React from "react"
import ExtLink from "../components/ext-link"

import GitHub from "../components/svgs/github"
import X from "../components/svgs/x"
import Envelope from "../components/svgs/envelope"
import LinkedIn from "../components/svgs/linkedin"

const Contacts = ({ social: { x, github, linkedin, email } }) => {
  const contacts = [
    {
      Comp: X,
      alt: "x",
      link: `https://x.com/${x}`,
    },
    {
      Comp: GitHub,
      alt: "github",
      link: `https://github.com/${github}`,
    },
    {
      Comp: LinkedIn,
      alt: "linkedin",
      link: `https://www.linkedin.com/in/${linkedin}`,
    },
    {
      Comp: Envelope,
      alt: "envelope",
      link: `mailto:${email}`,
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
