import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: 60,
      backgroundColor: "#f3f5f6",
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
