import { storyblokEditable } from "@storyblok/react";
 
const NavigationHeader = ({ blok }) => {
      // console.log(blok.back_arrow.filename
            // ,"blok=====")
  return (
  
<div>
  <img src={blok.back_arrow.filename}{...storyblokEditable(blok)}></img>
  <h2 {...storyblokEditable(blok)}>{blok.text}</h2>
  <img src={blok.right_image.filename} {...storyblokEditable(blok)}></img>
  
  </div>

  )
  
};
 
export default NavigationHeader;