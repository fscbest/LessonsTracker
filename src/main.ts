import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  FIREBASE_PROVIDERS,
  defaultFirebase({
    /*apiKey: "AIzaSyAxZzbqNpMAxmyenlXvDypKtKulq1u5tMI",
    authDomain: "lessonstracker.firebaseapp.com",
    databaseURL: "https://lessonstracker.firebaseio.com",
    storageBucket: "lessonstracker.appspot.com",*/
    apiKey: "AIzaSyCQdLqgjGt2g_c_f4pJlhvMX1x3syI8JVU",
    authDomain: "logintest-a97e9.firebaseapp.com",
    databaseURL: "https://logintest-a97e9.firebaseio.com",
    storageBucket: "logintest-a97e9.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })
])
  /*.catch((err: any) => console.error(err))*/;
