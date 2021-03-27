const BASE_URL="https://myapi-marlonavilatarrillo.herokuapp.com/api"
export const environment = {
  production: true,
  uriProduct: BASE_URL+"/products",
  uriCategory: BASE_URL+"/categories",
  uriPurchase: BASE_URL+"/apicheckout/purchase",
  uriProductsByCategory: BASE_URL+"/products/search/findByCategoryId"
};
