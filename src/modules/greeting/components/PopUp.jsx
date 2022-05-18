import React from 'react'
import Popup from 'reactjs-popup'

import Greeting from './Greeting'

export default function PopUp() {
  return (
  <div>
    <h3>Pop-Up</h3>
    <Popup modal trigger={<button>öffnen/schließen</button>}>
      {close => <Greeting close={close} />}
    </Popup>
  </div>
  )
}