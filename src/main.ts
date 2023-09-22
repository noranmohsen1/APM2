import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { MessageModule } from './app/messages/message.module';
import { UserModule } from './app/user/user.module';
import { ProductData } from './app/products/product-data';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }), UserModule, MessageModule, AppRoutingModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
