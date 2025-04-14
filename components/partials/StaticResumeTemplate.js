import React from "react";
import Heading from "../ui/Heading";
import IconWithText from "@/components/layouts/resume/IconWithText";

const StaticResumeTemplate = ({ themeColor = "#2969f2" }) => {
  return (
    <div className="w-[940px] mx-auto">
      <div className="c__resume">
        <div className="c__resume__block c__resume__block--personal-information">
          <div className="c__heading-wrapper mb-[1.25rem]">
            <Heading className="u__h2" tag="span">
              PARAS BOKHARI
            </Heading>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="tw-col">
              <IconWithText
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                content={`<span className="u__f-700">+1 630 936 8294</span>`}
              />
            </div>
            <div className="tw-col">
              <IconWithText
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                content={`<span className="u__f-700">parasbokhari@gmail.com</span>`}
              />
            </div>
            <div className="tw-col">
              <IconWithText
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                    <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                  </svg>
                }
                content={`<span className="u__f-700">https://bokharilovesyou.com</span>`}
              />
            </div>
            <div className="tw-col">
              <IconWithText
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                content={`<span className="u__f-700">Chicago, IL</span>`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
        <div className="mt-[2rem]">
          <div className="flex gap-4">
            <div className="w-[70%]">
              <div className="c__resume__block c__resume__block--experience">
                <div className="c__heading-wrapper mb-[0.5rem]">
                  <Heading className="u__h5" tag="span">
                    EXPERIENCE
                  </Heading>
                </div>
                <hr className="bg-[#000] h-[4px] b-0 mb-[0.5rem]" />
                <div className="c__resume-comp__experience">
                  <div className="c__resume-comp__experience__title-wrapper">
                    <div className="c__heading-wrapper mb-[0.25rem]">
                      <Heading className="u__h6 u__f-500" tag="span">
                        Senior Software Engineer, Frontend
                      </Heading>
                    </div>
                  </div>
                  <div className="c__resume-comp__experience__organization-wrapper">
                    <div className="c__heading-wrapper mb-[0.25rem]">
                      <Heading
                        className={`u__p u__f-700 text-[${themeColor}]`}
                        tag="span"
                      >
                        Taylor Corporation
                      </Heading>
                    </div>
                  </div>
                  <div className="c__resume-comp__experience__date-wrapper">
                    <IconWithText
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                          <path
                            fillRule="evenodd"
                            d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      content="<span>04/2023 - Present</span>"
                    />
                  </div>
                  <div className="c__resume-comp__experience__content-wrapper mt-[0.5rem]">
                    <div className="c__richtext-field c__richtext-field--resume">
                      <p>
                        Taylor Corporation is a graphical communications company
                        with more than 10,000 employees headquartered in North
                        Mankato, Minnesota
                      </p>
                      <ul>
                        <li>
                          Led development and management for
                          https://www.taylor.com/ visited by millions of users
                          every month, ensuring high-performance, accessibility,
                          and responsive design across multiple devices
                        </li>
                        <li>
                          Collaborated closely with product designers to create
                          and implement a new design system, comprising numerous
                          marketing components that serve as building blocks for
                          new web pages
                        </li>
                        <li>
                          Developed and maintained scalable features for the
                          corporate website using modern frameworks and best
                          practices, boosting search rankings and organic
                          traffic. Wrote maintainable code that aligned with
                          business goals
                        </li>
                        <li>
                          Repeatedly recognized as the team’s top performer and
                          valued contributor
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="c__resume-comp__experience">
                  <div className="c__resume-comp__experience__title-wrapper">
                    <div className="c__heading-wrapper mb-[0.25rem]">
                      <Heading className="u__h6 u__f-500" tag="span">
                        Front End Developer
                      </Heading>
                    </div>
                  </div>
                  <div className="c__resume-comp__experience__organization-wrapper">
                    <div className="c__heading-wrapper mb-[0.25rem]">
                      <Heading
                        className={`u__p u__f-700 text-[${themeColor}]`}
                        tag="span"
                      >
                        OneIMS - Integrated Marketing Solutions
                      </Heading>
                    </div>
                  </div>
                  <div className="c__resume-comp__experience__date-wrapper">
                    <IconWithText
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                          <path
                            fillRule="evenodd"
                            d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      content="<span>01/2018 - 04/2023</span>"
                    />
                  </div>
                  <div className="c__resume-comp__experience__content-wrapper mt-[0.5rem]">
                    <div className="c__richtext-field c__richtext-field--resume">
                      <p>
                        OneIMS is a software and digital marekting company
                        headquartered in Chicago, Illinois
                      </p>
                      <ul>
                        <li>
                          Created industry-level blazing fast custom marketing
                          sites that are fully integrated with content
                          management systems for customers ranging from
                          different industries using updated and ever-evolving
                          web technologies such as JavaScript ES6, React, Next,
                          Gatsby, WordPress, HubSpot and Shopify (can be found
                          at https://bokharilovesyou.com/portfolio)
                        </li>
                        <li>
                          Created lead generation tools to enhance the
                          organization's presence on the web and applications to
                          increase operational efficiency and productivity (can
                          be looked up at https://bokharilovesyou.com/products
                          -- Next.js, Node.js, Strapi)
                        </li>
                        <li>
                          Wrote pixel perfect CSS (Sass) on top of Bootstrap 4.0
                          & Bootstrap 5.0
                        </li>
                        <li>
                          Built a reusable and flexible design system that is
                          able to efficiently adapt to distinctive use cases
                          providing operational scalability
                        </li>
                        <li>
                          Cultivated strong client relationships to ensure
                          prompt communication, exceeded expectations, and
                          delivered ROI on time and on budget
                        </li>
                        <li>
                          Consistently recognized as a top-performing team
                          member
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticResumeTemplate;
