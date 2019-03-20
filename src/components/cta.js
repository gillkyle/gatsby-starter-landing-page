import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Give a final call to action because that's what the cool kids are doing."
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
