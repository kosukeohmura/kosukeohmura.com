/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExtLink from "./ext-link"
import FlexScoreboard from "../components/svgs/flexscoreboard"

const Bio = () => {
  return (
    <div className="bio">
      <p>Software engineer from Japan, currently based in Thailand.</p>
      <p>
        Creator of{" "}
        <ExtLink href="https://flexscoreboard.kosukeohmura.com/">
          <FlexScoreboard className="bio-text-app-icon" />
          FlexScoreboard
        </ExtLink>
        , a free scoreboard app.
      </p>
    </div>
  )
}

export default Bio
