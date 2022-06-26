import React from "react"
import { ReactComponent as Heart } from "assets/heart.svg"
import { useAppContext } from "configs/appContext"

import { Nav, SVGContainer } from "./Navigation.styles"
import SignedInNavigation from "./SignedInNavigation"
import SignedOutNavigation from "./SignedOutNavigation"

function Navigation() {
  const app = useAppContext()

  return (
    <Nav>
      <SVGContainer to={"/"}>
        <Heart />
      </SVGContainer>
      {app.user ? <SignedInNavigation /> : <SignedOutNavigation />}
    </Nav>
  )
}

export default Navigation
