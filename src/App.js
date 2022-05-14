import React, { useState } from "react";
import notificationLogo from "./assets/notify.png";

function App() {

  const [rangeval, setRangeval] = useState(null);

  return (
    <>
      <h1>Healthbeat</h1>
      <button onClick={notifyMe}>Notify me!</button>
      <div id="id1">
        <p>Wo hast du heute Beschwerden?</p>
        <input type="radio" value="Rücken" name="pain" /> Rücken <br/>
        <input type="radio" value="Nacken" name="pain" /> Nacken <br/>
        <input type="radio" value="Schulter" name="pain" /> Schulter <br/>
        <input type="radio" value="Hüfte" name="pain" /> Hüfte <br/>
        <input type="radio" value="Keine" name="pain" /> Keine <br/><br/>
        <button onclick={toggle_visibility()}>Aktualisieren und Speichern</button>
      </div>
      <div id="id2">
        <p>Wie stark sind deine Schmerzen?</p>
        <input type="range" className="custom-range" min="0" max="100" 
          onChange={(event) => setRangeval(event.target.value)} />
        <p>Dein Schmerzgrad liegt bei: {rangeval}%</p>

        <button onclick={toggle_visibility()}>Zurück</button>
      </div>
    </>
  );
}

export default App;

// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
  if (!Notification) {
   alert('Desktop notifications not available in your browser. Try Chromium.');
   return;
  }
 
  if (Notification.permission !== 'granted')
   Notification.requestPermission();
 });
 
 function toggle_visibility(id1, id2) {
   
} 
 
function notifyMe() {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
  else {
    var notification = new Notification("Zeit für etwas Sport", {
      icon: notificationLogo,
      body: "Du hast nun für 15 Minuten keine weiteren Termine\n\nWir haben 2 Übungen gegen Hüftbeschwerden für Dich vorbereitet.",
    });
    notification.onclick = function() {
      window.open('http://stackoverflow.com/a/13328397/1269037');
    };
  }
}