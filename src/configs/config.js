// project-page https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/Overview/quickStartType//sourceType/Microsoft_AAD_IAM/appId/279046de-451b-4968-ab8f-e599f9499385/objectId/79f201d3-c3f9-4b70-b32f-84c90c10a54b/isMSAApp//defaultBlade/Overview/appSignInAudience/AzureADandPersonalMicrosoftAccount/servicePrincipalCreated/true

const config = {
  appId: "279046de-451b-4968-ab8f-e599f9499385",
  authority:
    "https://login.microsoftonline.com/019f352f-6328-4351-b9dc-ea7038582267", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
  redirectUri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://healthbeat.netlify.app/",
  scopes: ["user.read", "calendars.read", "mailboxSettings.read", "mail.read"],
}

export default config
