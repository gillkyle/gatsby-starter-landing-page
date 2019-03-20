import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Find out before anyone else when we launch by signing up for our
      newsletter."
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
