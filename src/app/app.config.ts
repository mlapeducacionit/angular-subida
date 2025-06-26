import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, /* withDebugTracing */ } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

// https://angular.dev/guide/http/setup
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, /* withDebugTracing() */),
    provideHttpClient(
      /* withFetch() */
    )
  ]
};
