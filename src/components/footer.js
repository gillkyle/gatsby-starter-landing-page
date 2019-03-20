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
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ color: COLORS.blue, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/gillkyle/gatsby-starter-landing-page"
        >
          Contact Us
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
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
