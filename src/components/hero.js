import React from "react"
import PropTypes from "prop-types"

import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "60px",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "50vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1>Landing Page Starter</h1>
    <p>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p>
    <div style={{ width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img src={mockupFrame} />
      </div>
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
