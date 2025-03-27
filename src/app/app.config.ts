import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Provide the router with our routes
    provideRouter(routes),
    // If you want to use HttpClient, also do:
    // importProvidersFrom(HttpClientModule)
  ],
};
