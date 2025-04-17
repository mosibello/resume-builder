import React from "react";
import Heading from "@/components/ui/Heading";
import IconWithText from "@/components/layouts/resume/IconWithText";
import {
  Label,
  Input,
  TextareaAuto,
  Select,
} from "@/components/ui/FormElements";

export const BasicDetails = ({
  jobTitle,
  organization,
  startDate,
  endDate,
  content,
  themeColor,
}) => {
  return (
    <div className="c__resume-comp__experience">
      {jobTitle && (
        <div className="c__resume-comp__experience__title-wrapper">
          <div className="c__heading-wrapper mb-[0]">
            <Heading className="u__h6 u__f-500" tag="span">
              {jobtitle}
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
      {content && (
        <div className="c__resume-comp__experience__content-wrapper mt-[0.5rem]">
          <div className="c__richtext-field c__richtext-field--resume">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export const ExperienceSettings = ({
  jobTitle,
  organization,
  startDate,
  endDate,
  content,
  themeColor,
}) => {
  return (
    <>
      <div className="c__form">
        <div className="c__form__fields-wrapper">
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Job Title</Label>
            <TextareaAuto
              name={jobTitle.name}
              onChange={handleFieldChange(jobTitle.name)}
              value={jobTitle.value}
              placeholder="Job Title"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Organization</Label>
            <TextareaAuto
              name={organization.name}
              onChange={handleFieldChange(organization.name)}
              value={organization.value}
              placeholder="Organization"
            />
          </div>
        </div>
      </div>
    </>
  );
};
