"use client";
import React, { useState } from "react";
import Heading from "@/components/ui/Heading";
import IconWithText from "@/components/layouts/resume/IconWithText";
import {
  Label,
  Input,
  TextareaAuto,
  Select,
  DatePicker,
  RichtextEditor,
  RepeaterListItem,
  RepeaterField,
} from "@/components/ui/FormElements";
import { generateRandomUID } from "@/lib/helpers.js";

export const BasicDetails = ({
  jobTitle,
  organization,
  startDate,
  endDate,
  description,
  themeColor,
}) => {
  return (
    <div className="c__resume-comp__experience">
      {jobTitle && (
        <div className="c__resume-comp__experience__title-wrapper">
          <div className="c__heading-wrapper mb-[0]">
            <Heading className="u__h6 u__f-500" tag="span">
              {jobTitle}
            </Heading>
          </div>
        </div>
      )}
      {organization && (
        <div className="c__resume-comp__experience__organization-wrapper">
          <div className="c__heading-wrapper mb-[0.5rem]">
            <Heading
              className={`u__p u__f-700 text-[${themeColor}]`}
              tag="span"
            >
              {organization}
            </Heading>
          </div>
        </div>
      )}
      {(startDate || endDate) && (
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
            content={`<span>${startDate} - ${endDate}</span>`}
          />
        </div>
      )}
      {description && (
        <div className="c__resume-comp__experience__content-wrapper mt-[0.5rem]">
          <div className="c__richtext-field c__richtext-field--resume">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

// Settings

const repeaterFields = () => {
  let meta = {
    jobTitle: `Senior Software Engineer, Frontend`,
    organization: `Taylor Corporation`,
    startDate: new Date(),
    endDate: new Date(),
    description: `<p>Taylor Corporation is a graphical communications company with more than 10,000 employees headquartered in North Mankato, Minnesota</p>`,
    id: generateRandomUID(),
  };
  return meta;
};

let defaultRepeaterLength = 2;

export const ExperienceSettings = ({
  settings,
  repeaterHandlers,
  handleRepeaterFieldChange,
  moduleIndex,
}) => {
  const { sortingLabel } = settings.repeater;
  const repeater = settings.repeater.content;

  const [repeaterEditingMeta, setRepeaterEditingMeta] = useState({
    editing: false,
    index: null,
  });

  const [readyToAddIndex, setReadyToAddIndex] = useState(
    defaultRepeaterLength + 1
  );

  const handleFieldChange = (pathArray) => (e) => {
    const value = e.target.value;
    handleRepeaterFieldChange(moduleIndex, pathArray, value);
  };

  const handleDirectValueChange = (pathArray) => (value) => {
    handleRepeaterFieldChange(moduleIndex, pathArray, value);
  };

  return (
    <>
      <RepeaterField
        wrapperClassName=""
        label="Experience"
        name="experience"
        id={`experience-repeater-field`}
        repeaterEditingMeta={repeaterEditingMeta}
        repeater={repeater}
        sortingLabel={sortingLabel}
        handleAdd={() => {
          const newIndex = readyToAddIndex + 1;
          setReadyToAddIndex(newIndex);
          repeaterHandlers.add(moduleIndex, repeaterFields());
        }}
        handleEdit={(index) => {
          setRepeaterEditingMeta({
            editing: true,
            index,
          });
        }}
        handleFinishEdit={(index) => {
          setRepeaterEditingMeta({
            editing: false,
            index,
          });
        }}
        handleClone={(index) => {
          repeaterHandlers.clone(moduleIndex, index);
        }}
        handleDelete={(index) => {
          repeaterHandlers.delete(moduleIndex, index);
        }}
        handleMove={(active, over) => {
          repeaterHandlers.move(moduleIndex, active.id, over.id);
        }}
      >
        {repeaterEditingMeta && repeater && repeater.length > 0 && (
          <>
            {repeater.map((elem, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: `${
                      index === repeaterEditingMeta.index ? "block" : "none"
                    }`,
                  }}
                >
                  <div className="mt-[2rem]">
                    <div className="c__form">
                      <div className="c__form__fields-wrapper">
                        <div className="c__form__fieldset c__form__fieldset--100">
                          <Label>Job Title</Label>
                          <TextareaAuto
                            name={`jobTitle`}
                            onChange={handleFieldChange([
                              "repeater",
                              "content",
                              repeaterEditingMeta.index,
                              "jobTitle",
                            ])}
                            value={elem.jobTitle}
                            placeholder="Job Title"
                          />
                        </div>

                        <div className="c__form__fieldset c__form__fieldset--100">
                          <Label>Organization</Label>
                          <TextareaAuto
                            name={`organization`}
                            onChange={handleFieldChange([
                              "repeater",
                              "content",
                              repeaterEditingMeta.index,
                              "organization",
                            ])}
                            value={elem.organization}
                            placeholder="Organization"
                          />
                        </div>
                        <div className="c__form__fieldset c__form__fieldset--100">
                          <Label>Start Date</Label>
                          <DatePicker
                            date={
                              elem.startDate ? new Date(elem.startDate) : null
                            }
                            setDate={handleDirectValueChange([
                              "repeater",
                              "content",
                              repeaterEditingMeta.index,
                              "startDate",
                            ])}
                          />
                        </div>
                        <div className="c__form__fieldset c__form__fieldset--100">
                          <Label>End Date</Label>
                          <DatePicker
                            date={elem.endDate ? new Date(elem.endDate) : null}
                            setDate={handleDirectValueChange([
                              "repeater",
                              "content",
                              repeaterEditingMeta.index,
                              "endDate",
                            ])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </RepeaterField>
    </>
  );
};
