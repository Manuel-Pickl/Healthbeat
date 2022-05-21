import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { EventType, PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from "@azure/msal-react"
import ProvideAppContext from "configs/appContext"

import config from "./configs/config"
import { GlobalStyle } from "./configs/root-wrapper"
import App from "./App"

// <MsalInstanceSnippet>
const msalInstance = new PublicClientApplication({
  auth: {
    clientId: config.appId,
    redirectUri: config.redirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
})

// Check if there are already accounts in the browser session
// If so, set the first account as the active account
const accounts = msalInstance.getAllAccounts()
if (accounts && accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0])
}

msalInstance.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    // Set the active account - this simplifies token acquisition
    const authResult = event.payload
    msalInstance.setActiveAccount(authResult.account)
  }
})
// </MsalInstanceSnippet>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <ProvideAppContext>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ProvideAppContext>
    </MsalProvider>
  </React.StrictMode>
)
