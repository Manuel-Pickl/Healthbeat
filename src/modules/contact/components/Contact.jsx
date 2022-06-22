import React from "react"

import Button from "modules/common/components/buttons/components/Button"

import * as Styled from "./Contact.styles"

export default function Contact() {
  return (
    <Styled.Kontakt>
      <h2>Kontakt</h2>
      <p>
        Sie wollen einen Beratungstermin vereinbaren oder haben Fragen? Dann
        nutzen Sie das folgende Kontaktformular. Wir antworten Ihnen
        schnellstmöglich.
      </p>
      <form>
        <label htmlfor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="betreff">Betreff</label>
        <input type="text" name="betreff" required />
        <textarea
          name="text"
          type="text"
          required
          placeholder="Schreiben Sie Ihre Nachricht."
        />
        <Button type="submit" text={"Senden"} />
      </form>
    </Styled.Kontakt>
  )
}
