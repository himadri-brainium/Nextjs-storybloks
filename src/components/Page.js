import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  // console.log(blok,'+++++++')
  return (<main {...storyblokEditable(blok)} className="main-class" style={{backgroundColor:`${blok?.backgroundColor?.color}`}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div >
            {blok.body.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>)
};

export default Page;
