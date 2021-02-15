import React from "react"

import { Link } from "gatsby"

const Tab = ({ location }) => {
  const items = [
    {
      title: 'Info',
      to: '/',
    },
    {
      title: 'Blog Posts',
      to: '/posts',
    },
  ]
console.log(location)
  return (
    <ul className="tab">
      {items.map(({ title, to }) => {
        return (
          <li>
            <Link to={to} aria-selected={location.pathname === to}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Tab
