// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseCollections:{
      product:"product-collection"
  },
  firebaseConfiguration:{
    apiKey: "AIzaSyCb1f2fhbzFtmUmtU5MLraa4SJ1wI31L6Q",
    authDomain: "btec-angular.firebaseapp.com",
    databaseURL: "https://btec-angular-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "btec-angular",
    storageBucket: "btec-angular.appspot.com",
    messagingSenderId: "818287888123",
    appId: "1:818287888123:web:0334f750d92f05f422925e",
    measurementId: "G-X821L8FTEP"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
