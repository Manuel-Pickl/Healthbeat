import React from "react"
import { Link } from "react-router-dom"
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react"
import { ReactComponent as Heart } from "assets/heart.svg"
import { useAppContext } from "configs/appContext"

import { Nav, SVGContainer } from "./Navigation.styles"

function Navigation() {
  const app = useAppContext()

  return (
    <Nav>
      <SVGContainer>
        <Heart />
      </SVGContainer>
      <ul>
        <li>
          <Link to="/">Startseite</Link>
        </li>
        <li>
          <UnauthenticatedTemplate>
            <button onClick={() => app.signIn()}>Anmelden</button>
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            <button onClick={() => app.signOut()}>Abmelden</button>
          </AuthenticatedTemplate>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
