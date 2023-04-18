
// import Head from "next/head"
// import styles from "../styles/Home.module.css"
 
// import { getStoryblokApi ,StoryblokComponent,useStoryblokState } from "@storyblok/react"
 
// export default function Home({ story }) {
//   story = useStoryblokState(story);
//  console.log(story.content,'====')
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
 
//       <header>
//         <h1>{story ? story.name : "My Site"}</h1>
//       </header>
 
//       <StoryblokComponent blok={story.content} />
//     </div>
//   );
// }
 



// //using getServerSideProps
 
//  export async function getServerSideProps(context) {
//   // get the query object
//   const insideStoryblok = context.query._storyblok;
 
//   let slug = "home";
 
//   let sbParams = {
//     version: "published", // or 'draft'
//   };
 
//   if (insideStoryblok) {
//     sbParams.version = "draft";
//   }
 
//   const storyblokApi = getStoryblokApi();
//   let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//     },
//   };
// }


import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "../components/Layout";
 
export default function Home({ story }) {
  story = useStoryblokState(story);
 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
    </div>
  );
}
 
export async function getStaticProps() {
  let slug = "home";
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
