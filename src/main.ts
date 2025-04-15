import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"devtexmex","appId":"1:485496153631:web:435691bfb8dacd4031572a","storageBucket":"devtexmex.firebasestorage.app","apiKey":"AIzaSyAKvipck4ULnMLpC6R4cE-fqIee8YaA00U","authDomain":"devtexmex.firebaseapp.com","messagingSenderId":"485496153631"})), provideAuth(() => getAuth()), provideStorage(() => getStorage())]
}).catch((err) => console.error(err));
