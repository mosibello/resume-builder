import React from "react";
import Heading from "@/components//ui/Heading";
import IconWithText from "@/components/layouts/resume/IconWithText";
import { BasicDetails } from "@/components/layouts/resume/panels/BasicDetails";

const ResumeViewport = ({ data }) => {
  const { content, styles } = data;
  const { themeColor = `var(--t-primary-branding-color)` } = styles;
  const {
    firstName: { value: firstName },
    lastName: { value: lastName },
    phone: { value: phone },
    emailAddress: { value: emailAddress },
    websiteUrl: { value: websiteUrl },
    location: { value: location },
  } = content;

  return (
    <div className="w-[940px] mx-auto">
      <div className="c__resume">
        <BasicDetails
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          emailAddress={emailAddress}
          websiteUrl={websiteUrl}
          location={location}
        />
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
                    <div className="c__heading-wrapper mb-[0]">
                      <Heading className="u__h6 u__f-500" tag="span">
                        Senior Software Engineer, Frontend
                      </Heading>
                    </div>
                  </div>
                  <div className="c__resume-comp__experience__organization-wrapper">
                    <div className="c__heading-wrapper mb-[0.5rem]">
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
              </div>
            </div>
            <div className="w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewport;
