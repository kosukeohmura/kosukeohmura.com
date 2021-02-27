import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import ExtLink from "../components/ext-link.tsx"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteUrl
          author {
            name
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isPostsPath = location.pathname === `${rootPath}posts`
  const LogoTextTag = isRootPath || isPostsPath ? "h1" : "span"

  const header = (
    <Link className="logo" to="/">
      <img
        className="logo-avatar"
        src={`${data.site.siteMetadata.siteUrl}/icon_32.png`}
        alt={author?.name || ``}
      />
      <LogoTextTag className="logo-text">{author?.name || ``}</LogoTextTag>
    </Link>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <small>
          ©{new Date().getFullYear()} {author?.name || ``}, Built with
          {` `}
          <ExtLink href="https://www.gatsbyjs.com">Gatsby</ExtLink>.
        </small>
      </footer>
    </div>
  )
}

export default Layout
