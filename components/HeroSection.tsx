import React from "react";

export default function HeroSection() {
  return (
    <main id="home" className="cr-hero-bg">
      <div className=" sm:py-16 py-8 container flex flex-col justify-start items-center mb-32 h-screen">
        <div className="flex flex-col justify-center items-center z-10">
          <div className="flex sm:w-40 xs:w-32 w-24">
            <img src="/images/logo_white.png" alt="logo" />
          </div>
        </div>
        <div className="flex lg:h-full h-fit lg:mt-0 mt-40 lg:flex-row flex-col lg:justify-between justify-center items-center z-10">
          <div className="flex flex-col lg:w-2/4 lg:mr-6 lg:mb-0 mb-16">
            <h1 className="cr-section-title w-full md:text-left md:text-start m-0 mb-4">
              <div className="elementor-divider invisible md:visible">
                <div className="elementor-divider-separator"></div>
              </div>
              One-click checkout,
              <br />
              wherever you shop
            </h1>
            <article className="cr-text w-full lg:text-start lg:m-0 mt-4">
              Cherry is an app that empowers mobile shoppers to check out in one
              click wherever they shop. No more filling forms, logins, or
              passwords when checking out.
            </article>
          </div>

          <div className="flex xl:w-3/5 lg:w-2/4 w-4/5 h-fit aspect-video lg:ml-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZKE8v8IgpfY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
