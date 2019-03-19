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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div>Contact Us</div>
      <div style={{ color: COLORS.mediumGray }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
