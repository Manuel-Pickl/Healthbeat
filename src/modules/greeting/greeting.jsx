import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class App extends React.Component {
  
  render(){
    return (
      <div>
        
        <p>
        <Alert /></p>
      </div>
    );
  }
}

export default App;

class Alert extends React.Component {
  submit = () => {
    confirmAlert({
      title: <Greeting />,
      message: 'Na, heute schon Sport gemacht?',
      buttons: [
        {
          label: 'Ja',
          onClick: () => CloseEvent
        },
        {
          label: 'Nein',
          onClick: () => CloseEvent
        }
      ]
    });
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>PopUp</button>
      </div>
    );
  }
}

class Greeting extends React.Component {
  state = {
    hour: null,
    username: 'Andreas'
  }
  componentDidMount() {
    this.getHour()
  }

  getHour = () => {
   const date = new Date();
   const hour = date.getHours();
   this.setState({
      hour
   });
  }

  render(){
    const {hour, username} = this.state;
    return (
      <div className='App'>
        {(() => {

            if (hour > 5 && hour < 11) {
              return ( <div>Guten Morgen {username}!
              Na, heute schon Sport gemacht?</div> )
            }
            else if (hour > 11 && hour < 18) {
              return ( <div>Guten Tag {username}!
              Na, heute schon Sport gemacht?</div> )
            }
            else {
              return ( <div>Guten Abend {username}!
              </div> )
            }
            })()}
      </div>
    );
  }
}
