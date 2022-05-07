import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAu5IS3DjfjS6Z3_MGrYpCVz8RtGv4vIjs",
  authDomain: "sfl-dynasty.firebaseapp.com",
  databaseURL: "https://sfl-dynasty-default-rtdb.firebaseio.com",
  projectId: "sfl-dynasty",
  storageBucket: "sfl-dynasty.appspot.com",
  messagingSenderId: "838922834336",
  appId: "1:838922834336:web:adf0c7d78b4c9b7a7814c5",
  measurementId: "G-4N2PKVDX31"
});

const analytics = getAnalytics(firebaseApp);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
