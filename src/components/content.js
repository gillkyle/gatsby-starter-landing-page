import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Amazing Features"
      description="See what it is that really makes us great"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Never Before Seen</h3>
        <p style={{ color: COLORS.gray }}>
          Thanks to reusable components, this content block can be used again
          and again and again.
        </p>
      </div>
      <div>
        <img src={feature} />
      </div>
    </content>
  </div>
)

export default Content
