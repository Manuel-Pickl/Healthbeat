import React from "react"
import { ReactComponent as Contact } from "assets/buttons/contact.svg"
import { ReactComponent as Home } from "assets/buttons/home.svg"
import { ReactComponent as Login } from "assets/buttons/login.svg"
import { ReactComponent as Member } from "assets/buttons/member.svg"
import { useAppContext } from "configs/appContext"

import Button from "modules/common/components/buttons/components/Button"
import DetailsButton from "modules/common/components/buttons/components/DetailsButton"
import NavigationButton from "modules/common/components/buttons/components/NavigationButton"
import { StyledLink } from "modules/common/components/buttons/components/NavigationButton.styles"

export default function SignedOutNavigation() {
  const app = useAppContext()
  return (
    <>
      <ul>
        <li>
          <NavigationButton SVG={Home} text={"Startseite"} link={"/"} />
        </li>
        <li>
          <DetailsButton
            SVG={Member}
            text={"Mitglied werden!"}
            link={"#member"}
          />
        </li>
        <li>
          <DetailsButton SVG={Contact} text={"Kontakt"} link={"#contact"} />
        </li>
        <li>
          <Button SVG={Login} onClick={() => app.signIn()} text={"Anmelden"} />
        </li>
      </ul>
    </>
  )
}
