// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e54c9db30017d9e83e256a19c3d12fbd@o4507952635248640.ingest.de.sentry.io/4507952644030544",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark"
    })
  ],
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
