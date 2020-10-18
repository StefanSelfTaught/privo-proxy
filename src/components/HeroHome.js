import React, { useState } from "react";
import Bubbles from "../images/svg/bubbles.svg";
import PlayIcon from "../images/svg/play.svg";
import Modal from "../utils/Modal";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <Bubbles />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Introducing{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Privo Proxy
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Privo Proxy is serving as a API Gateway and is a fully managed
                microservice that makes it easy for developers to publish,
                maintain, monitor, secure, and operate APIs at any scale.
                It&apos;s a pay-as-you-go service that takes care of all of the
                undifferentiated heavy lifting involved in securely and reliably
                running APIs at scale.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://app.privoproxy.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Try it now
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="https://app.privoproxy.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={require("../images/server.png")}
                  width="768"
                  height="432"
                  alt="Hero"
                />
                {/*                <Img style={{ marginRight: '100px' }} fixed={data.file.childImageSharp.fixed} />*/}
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-14 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <PlayIcon className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/hYgP0cBORVg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="API Gateway"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
