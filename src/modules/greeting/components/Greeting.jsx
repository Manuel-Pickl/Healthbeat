import React from 'react';

const rhetoQuest = " Na, heute schon Sport gemacht?"
var username = "Andreas";

export default function Greeting() {
  const date = new Date();
  const hour = date.getHours();
  return (
  <div>
    {(() => {
      if (hour > 5 && hour < 11) {
        return ( <div>Guten Morgen {username}!<p>{rhetoQuest}</p></div> )
        }
      else if (hour > 11 && hour < 20) {
        return ( <div>Guten Tag {username}!<p>{rhetoQuest}</p></div> ) 
        }
      else {
        return ( <div>Guten Abend {username}!<p>{rhetoQuest}</p></div> )
        }
        })()}
  </div>
  )
}