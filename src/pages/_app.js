// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// import { storyblokInit, apiPlugin } from "@storyblok/react";
 
// storyblokInit({
//   accessToken: "Z2DK0fSEz9dkyd3qq7R4rgtt",
//   use: [apiPlugin]
// });


import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
 
storyblokInit({
  accessToken: "Z2DK0fSEz9dkyd3qq7R4rgtt",
  use: [apiPlugin],
  components,
});
 
