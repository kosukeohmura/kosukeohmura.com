import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import ExtLink from "../components/ext-link"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      avatar: file(absolutePath: { regex: "/icon_32.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 95) {
            ...GatsbyImageSharpFixed
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
  const isPostsPath = `${rootPath}/posts/`
  const LogoTextTag = (isRootPath || isPostsPath) ? 'h1' : 'p'

  const header = (
    <>
      <ul>
        <li>
          <Link className="logo" href="/">
            <ul>
              <li>
                <Image
                  fixed={avatar}
                  alt={author?.name || ``}
                  className="bio-avatar"
                />
              </li>
              <li>
                <LogoTextTag className="logo-text">
                  {author?.name || ``}
                </LogoTextTag>
              </li>
            </ul>
          </Link>
        </li>
        <li className="header-link-item">
          <Link to="/posts">
            Blog
          </Link>
        </li>
      </ul>
    </>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          ©{new Date().getFullYear()} {author?.name || ``}, Built with
          {` `}
          <ExtLink href="https://www.gatsbyjs.com">Gatsby</ExtLink>
          .
        </p>
      </footer>
    </div>
  )
}

export default Layout
