var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var forms_1 = require('@angular/forms');
var angularfire2_1 = require('angularfire2');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase({
        apiKey: "AIzaSyAxZzbqNpMAxmyenlXvDypKtKulq1u5tMI",
        authDomain: "lessonstracker.firebaseapp.com",
        databaseURL: "https://lessonstracker.firebaseio.com",
        storageBucket: "lessonstracker.appspot.com"
    }),
    angularfire2_1.firebaseAuthConfig({
        provider: angularfire2_1.AuthProviders.Anonymous,
        method: angularfire2_1.AuthMethods.Anonymous
    })
]);
//# sourceMappingURL=main.js.map