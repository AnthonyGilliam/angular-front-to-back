// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyCnE92xel6WRsXy5Xx09bNq6ZhKNuhp97E',
    authDomain: 'clientpanelprod-b5a14.firebaseapp.com',
    databaseURL: 'https://clientpanelprod-b5a14.firebaseio.com',
    projectId: 'clientpanelprod-b5a14',
    storageBucket: 'clientpanelprod-b5a14.appspot.com',
    messagingSenderId: '306648190803'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
