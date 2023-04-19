import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import React from "react";

const ButtonLink = ({blok}) => {
      console.log(blok,"blok)()())0")
  return (
    <div>
      <Link href={blok?.link?.cached_url} {...storyblokEditable(blok)}>
     
       <div style={{display:"flex"}}> <button>{blok.text}</button></div>
      </Link>
    </div>
  );
};

export default ButtonLink;
