import "@/styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import NavigationHeader from "../components/NavigationHeader";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import MenuLink from "../components/MenuLink";
import Layout from "../components/Layout";
import ImageLink from "../components/ImageLink";
import ButtonLink from "../components/ButtonLink";
import Logo from "../components/Logo";
import Banner from "../components/Banner";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  NavigationHeader: NavigationHeader,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  image_link: ImageLink,
  button_link: ButtonLink,
  logo: Logo,
  banner: Banner,
};

storyblokInit({
  accessToken: "Z2DK0fSEz9dkyd3qq7R4rgtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* // Responsive meta tag */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* // bootstrap CDN */}

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Layout story={pageProps.config}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
