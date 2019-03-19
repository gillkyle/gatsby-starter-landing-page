import React from "react"

import feature from "../images/feature.png"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <h2>Amazing Features</h2>
    <p>See what it is that really makes us great</p>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 440px))",
      }}
    >
      <div>
        <h3>Never Before Seen</h3>
        <p>
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
