/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExtLink from "./ext-link.tsx"
import FlexScoreboard from "../components/svgs/flexscoreboard"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <p>{author?.summary}</p>
      <p>
        Developer of{" "}
        <ExtLink href="https://flexscoreboard.kosukeohmura.com/">
          <FlexScoreboard className="bio-text-app-icon" />
          FlexScoreboard
        </ExtLink>
        .
      </p>
    </div>
  )
}

export default Bio
