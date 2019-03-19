import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../styles/constants"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div>Contact</div>
    <hr />© {new Date().getFullYear()}
    {` `}
    {siteTitle}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
