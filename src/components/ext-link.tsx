import React from "react"

const ExtLink = ({ children, ...props }) => (
  <a {...props} rel="noopener" target={props.target || "_blank"}>
    {children}
  </a>
)

export default ExtLink
