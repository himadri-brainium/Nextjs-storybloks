import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
const Config = ({ blok }) => {
  return (
    <div className="container"  {...storyblokEditable(blok)}>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className={styles.headerlogobackbtn}>
            {/* <span className={styles.headerback}> */}
              {blok?.header_menu.map((nestedBlok) => (
                <StoryblokComponent
                  className=""
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                />
              ))}
              {/* <img className={styles.forback} src="/images/icon/back.png" alt="" /> BACK TO */}
            {/* </span> */}
            {/* <img className={styles.toplogo} src="/images/logo/red-logo.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="relative bg-white border-b-2 border-gray-100" {...storyblokEditable(blok)}>
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //     <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <Link href="/">
    //           {/* <a>
    //             <img
    //               className="h-20 w-auto sm:h-10"
    //               src='storyblok-primary.png'
    //               alt=""
    //             />
    //           </a> */}
    //         </Link>
    //       </div>
    // {blok?.header_menu.map((nestedBlok) => (
    //   <StoryblokComponent className='' blok={nestedBlok} key={nestedBlok._uid} />
    // ))}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Config;
