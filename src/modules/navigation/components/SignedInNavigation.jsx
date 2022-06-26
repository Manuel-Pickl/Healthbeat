import React from "react"
import { ReactComponent as Contact } from "assets/buttons/contact.svg"
import { ReactComponent as Home } from "assets/buttons/home.svg"
import { ReactComponent as Login } from "assets/buttons/login.svg"
import { useAppContext } from "configs/appContext"

import Button from "modules/common/components/buttons/components/Button"
import NavigationButton from "modules/common/components/buttons/components/NavigationButton"

export default function SignedInNavigation() {
  const app = useAppContext()
  return (
    <>
      <ul>
        <li>
          <NavigationButton SVG={Home} text={"Startseite"} link={"/"} />
        </li>
        <li>
          <NavigationButton SVG={Contact} text={"Kontakt"} link={"/contact"} />
        </li>
        <li>
          <Button SVG={Login} onClick={() => app.signOut()} text={"Abmelden"} />
        </li>
      </ul>
    </>
  )
}
