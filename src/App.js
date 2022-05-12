import notificationLogo from "./assets/notify.png";

function App() {
  return (
    <>
      <h1>Healthbeat</h1>
      <button onClick={notifyMe}>Notify me!</button>
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