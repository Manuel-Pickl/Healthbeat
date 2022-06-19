import React from "react"
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react"
import { ReactComponent as Contact } from "assets/buttons/contact.svg"
import { ReactComponent as Home } from "assets/buttons/home.svg"
import { ReactComponent as Login } from "assets/buttons/login.svg"
import { ReactComponent as Member } from "assets/buttons/member.svg"
import { ReactComponent as Heart } from "assets/heart.svg"
import { useAppContext } from "configs/appContext"

import Button from "modules/common/components/buttons/components/Button"
import NavigationButton from "modules/common/components/buttons/components/NavigationButton"

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
          <NavigationButton SVG={Home} text={"Startseite"} link={"/"} />
        </li>
        <li>
          <UnauthenticatedTemplate>
            <NavigationButton
              SVG={Member}
              text={"Mitglied werden!"}
              link={"/"}
            />
          </UnauthenticatedTemplate>
        </li>
        <li>
          <NavigationButton SVG={Contact} text={"Kontakt"} link={"/"} />
        </li>
        <li>
          <UnauthenticatedTemplate>
            <Button
              SVG={Login}
              onClick={() => app.signIn()}
              text={"Anmelden"}
            />
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            <Button
              SVG={Login}
              onClick={() => app.signOut()}
              text={"Abmelden"}
            />
          </AuthenticatedTemplate>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
