import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import ExtLink from "../components/ext-link.tsx"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      avatar: file(absolutePath: { regex: "/icon_32.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.fixed

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isPostsPath = location.pathname === `${rootPath}posts`
  const LogoTextTag = isRootPath || isPostsPath ? "h1" : "span"

  const header = (
    <Link className="logo" to="/">
      <Image
        fixed={avatar}
        alt={author?.name || ``}
        className="logo-avatar"
        fadeIn={false}
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
