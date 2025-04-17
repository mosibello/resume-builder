"use client";
import React, { useState, useEffect } from "react";
import Bounded from "@/components/wrappers/Bounded";
import Container from "@/components/wrappers/Container";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import EditorTopbar from "@/components/partials/EditorTopbar";
import ResumeViewport from "@/components/partials/ResumeViewport";
import { BasicDetailsSettings } from "@/components/layouts/resume/panels/BasicDetails";
import EditorInfobar from "@/components/partials/EditorInfobar";
import {
  Label,
  Input,
  TextareaAuto,
  Select,
  RichtextEditor,
} from "@/components/ui/FormElements";

const addNamesToFields = (fields) =>
  Object.fromEntries(
    Object.entries(fields).map(([key, val]) => [key, { ...val, name: key }])
  );

const Editor = () => {
  const [resumeData, setResumeData] = useState({
    name: undefined,
    id: undefined,
    styles: {
      themeColor: undefined,
    },
    content: {
      firstName: { value: `John` },
      lastName: { value: `Doe` },
      phone: { value: `+1 630 936 8291` },
      emailAddress: { value: `johndoe@gmail.com` },
      websiteUrl: { value: `https://example.com` },
      location: { value: `Chicago, IL` },
    },
  });

  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    setResumeData((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [fieldName]: {
          ...prev.content[fieldName],
          value,
        },
      },
    }));
  };

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      content: addNamesToFields(prev.content),
    }));
  }, []);

  useEffect(() => {
    console.log(resumeData.content);
  }, [resumeData]);

  return (
    <div className="h-screen overflow-hidden">
      <header style={{ position: "relative", zIndex: "99999999999999" }}>
        <EditorTopbar />
        <EditorInfobar />
      </header>
      <main className="w-full h-full">
        <div className="theme-row flex">
          <div className="theme-column text-theme-text w-full max-w-sm bg-white border-r border-theme-border">
            <div className="theme-box flex items-center justify-between bg-white py-4 px-4">
              <div className="theme-box">
                {/* <h2 className="text-xl font-medium">Edit Resume</h2> */}

                <div className="theme-box">
                  <div className="text-sm breadcrumbs">
                    <ul>
                      <li className="cursor-pointer hover:theme-primary">
                        <span className="text-[var(--t-primary-branding-color)] hover:text-[--t-primary-branding-hover-color]">
                          Home
                        </span>
                      </li>
                      <li>
                        <span
                          className="text-gray-400 truncate cursor-not-allowed"
                          style={{ width: `200px` }}
                        >
                          Basic Information
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h2 className="text-xl font-medium">Basic Information</h2>
                </div>
              </div>
            </div>
            <div className="theme-box text-theme-text-light border-t border-theme-border ">
              <div className="theme-row bg-theme-panel-dark flex flex-items-center">
                <div className="theme-column w-full false">
                  <div className="theme-box font-medium px-4 py-4 border-theme-border border-b cursor-pointer">
                    Content
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ height: "calc(100vh - 57px - 60px - 125px)" }}
              className="theme-box bg-theme-panel overflow-y-auto pb-24"
            >
              <div className="c__editor__sidebar__primary-navigation hidden">
                <div className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark">
                  <div className="flex items-center justify-between -mx-1">
                    <div className="px-1">
                      <h2 className="font-medium u__p text-inherit">
                        Basic Details
                      </h2>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark">
                  <div className="flex items-center justify-between -mx-1">
                    <div className="px-1">
                      <h2 className="font-medium u__p text-inherit">
                        Experience
                      </h2>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark">
                  <div className="flex items-center justify-between -mx-1">
                    <div className="px-1">
                      <h2 className="font-medium u__p text-inherit">
                        Education
                      </h2>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark">
                  <div className="flex items-center justify-between -mx-1">
                    <div className="px-1">
                      <h2 className="font-medium u__p text-inherit">
                        Technologies
                      </h2>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="px-[1rem] py-[1.25rem] border-b border-theme-border text-theme-text-light cursor-pointer hover-bg-theme-panel-dark">
                  <div className="flex items-center justify-between -mx-1">
                    <div className="px-1">
                      <h2 className="font-medium u__p text-inherit">
                        Projects
                      </h2>
                    </div>
                    <div className="px-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c__editor__sidebar__editor-form px-[1rem] py-[1.25rem]">
                <BasicDetailsSettings
                  firstName={resumeData.content.firstName}
                  lastName={resumeData.content.lastName}
                  phone={resumeData.content.phone}
                  emailAddress={resumeData.content.emailAddress}
                  websiteUrl={resumeData.content.websiteUrl}
                  location={resumeData.content.location}
                  handleFieldChange={handleFieldChange}
                />
                <RichtextEditor />
              </div>
            </div>
          </div>
          <div className="transition-all duration-200 overflow-hidden w-full">
            <div
              style={{ height: `100vh` }}
              className="theme-column w-full overflow-y-scroll"
            >
              <div className="p-[4rem] pb-[20rem]">
                <ResumeViewport data={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;
