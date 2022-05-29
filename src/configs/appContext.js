// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { createContext, useContext, useEffect, useState } from "react"
import { InteractionType } from "@azure/msal-browser"
import { useMsal } from "@azure/msal-react"
import { AuthCodeMSALBrowserAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser"
import config from "configs/config"
import { getUser } from "utils/graph"

const appContext = createContext({
  user: undefined,
  error: undefined,
  signIn: undefined,
  signOut: undefined,
  displayError: undefined,
  clearError: undefined,
  authProvider: undefined,
})

export function useAppContext() {
  return useContext(appContext)
}

export default function ProvideAppContext({ children }) {
  const auth = useProvideAppContext()
  return <appContext.Provider value={auth}>{children}</appContext.Provider>
}
// </AppContextSnippet>

function useProvideAppContext() {
  const [user, setUser] = useState(undefined)
  const [error, setError] = useState(undefined)

  const msal = useMsal()

  const displayError = (message, debug) => {
    setError({ message, debug })
  }

  const clearError = () => {
    setError(undefined)
  }

  // <AuthProviderSnippet>
  // Used by the Graph SDK to authenticate API calls
  const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
    msal.instance,
    {
      account: msal.instance.getActiveAccount(),
      scopes: config.scopes,
      interactionType: InteractionType.Popup,
    }
  )
  // </AuthProviderSnippet>

  // <UseEffectSnippet>
  useEffect(() => {
    const checkUser = async () => {
      if (!user) {
        try {
          // Check if user is already signed in
          const account = msal.instance.getActiveAccount()
          if (account) {
            // Get the user from Microsoft Graph
            const user = await getUser(authProvider)

            setUser({
              displayName: user.displayName || "",
              email: user.mail || user.userPrincipalName || "",
              timeFormat: user.mailboxSettings?.timeFormat || "h:mm a",
              timeZone: user.mailboxSettings?.timeZone || "UTC",
              workingHours: user.mailboxSettings?.workingHours,
            })
          }
        } catch (err) {
          displayError(err.message)
        }
      }
    }
    checkUser()
  })
  // </UseEffectSnippet>

  // <SignInSnippet>
  const signIn = async () => {
    await msal.instance.loginPopup({
      scopes: config.scopes,
      prompt: "select_account",
    })

    // Get the user from Microsoft Graph
    const user = await getUser(authProvider)

    setUser({
      displayName: user.displayName || "",
      email: user.mail || user.userPrincipalName || "",
      timeFormat: user.mailboxSettings?.timeFormat || "h:mm a",
      timeZone: user.mailboxSettings?.timeZone || "UTC",
      workingHours: user.mailboxSettings?.workingHours || {},
    })
  }
  // </SignInSnippet>

  // <SignOutSnippet>
  const signOut = async () => {
    await msal.instance.logoutPopup()
    setUser(undefined)
  }
  // </SignOutSnippet>

  return {
    user,
    error,
    signIn,
    signOut,
    displayError,
    clearError,
    authProvider,
  }
}
