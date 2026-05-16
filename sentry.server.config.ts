import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://3358303a5e858c5fa195bb959676ea0f@o4511388675866624.ingest.de.sentry.io/4511398963118160",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending of user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nuxt/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
