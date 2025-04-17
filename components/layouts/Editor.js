"use client";
import React, { useState, useEffect } from "react";
import Bounded from "@/components/wrappers/Bounded";
import Container from "@/components/wrappers/Container";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import EditorTopbar from "@/components/partials/EditorTopbar";
import EditorInfobar from "@/components/partials/EditorInfobar";
import {
  Label,
  Input,
  TextareaAuto,
  Select,
} from "@/components/ui/FormElements";

const Editor = () => {
  const [resumeData, setResumeData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email_address: "",
    website_url: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <header style={{ position: "relative", zIndex: "99999999999999" }}>
        <EditorTopbar />
        <EditorInfobar />
      </header>
      <main className="w-full h-full">
        <div className="theme-row flex">
          <div className="theme-column text-theme-text w-full max-w-sm bg-white border-r border-theme-border">
            <div className="theme-box flex items-center justify-between bg-white py-4 px-4">
              <div className="theme-box">
                <h2 className="text-xl font-medium">Edit Resume</h2>
              </div>
            </div>
            <div className="theme-box text-theme-text-light border-t border-theme-border ">
              <div className="theme-row bg-theme-panel-dark flex flex-items-center">
                <div className="theme-column w-full false text-center">
                  <div className="theme-box font-medium px-4 py-4 border-theme-border border-b cursor-pointer">
                    Contents
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
                <div className="c__form">
                  <div className="c__form__fields-wrapper">
                    <div className="c__form__fieldset c__form__fieldset--100">
                      <Label>First Name</Label>
                      <Input
                        name="first_name"
                        onChange={handleChange}
                        value={resumeData.first_name}
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="c__form__fieldset c__form__fieldset--100">
                      <Label>Last Name</Label>
                      <TextareaAuto
                        name="last_name"
                        onChange={handleChange}
                        value={resumeData.last_name}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Editor;
