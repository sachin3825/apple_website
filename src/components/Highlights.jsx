import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousal from "./VideoCarousal";
import { animateWithGsap } from "../utils/animation";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 }, { delay: 0 });
    animateWithGsap(".link", { opacity: 1, y: 0, stagger: 0.25 }, { delay: 0 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link flex items-center justify-center">
              Watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link flex items-center justify-center">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2 mt-1" />
            </p>
          </div>
        </div>

        <VideoCarousal />
      </div>
    </section>
  );
};

export default Highlights;
