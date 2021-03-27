// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const BASE_URL="https://myapi-marlonavilatarrillo.herokuapp.com/api"
export const environment = {
  production: false,
  uriProduct: BASE_URL+"/products",
  uriCategory: BASE_URL+"/categories",
  uriPurchase: BASE_URL+"/apicheckout/purchase",
  uriProductsByCategory: BASE_URL+"/products/search/findByCategoryId"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
