import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { freeNbaInterceptor } from '@core/interceptors/free-nba.interceptor';
import { environment } from '@environment';
import APP_ROUTES from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES), provideHttpClient(withInterceptors([freeNbaInterceptor]))],
}).catch((err) => console.error(err));
