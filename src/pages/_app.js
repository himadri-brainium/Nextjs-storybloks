// import '@/styles/globals.css'


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
import ButtonLink from "../components/ButtonLink"
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
  image_link:ImageLink,
  button_link:ButtonLink,
  logo:Logo,
  banner:Banner,
};

storyblokInit({
  accessToken: "Z2DK0fSEz9dkyd3qq7R4rgtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}