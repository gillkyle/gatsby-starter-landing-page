import React from "react"
import PropTypes from "prop-types"

import Image from "./image"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "60px",
    }}
  >
    <h1>Landing Page Starter</h1>
    <p>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p>
    <div
      style={{ minWidth: "200px", maxWidth: `300px`, marginBottom: `1.45rem` }}
    >
      <Image />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
