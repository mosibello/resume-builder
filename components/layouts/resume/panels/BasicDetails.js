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
  firstName,
  lastName,
  phone,
  emailAddress,
  websiteUrl,
  location,
}) => {
  return (
    <div className="c__resume__block c__resume__block--personal-information">
      {(firstName || lastName) && (
        <div className="c__heading-wrapper mb-[1.25rem]">
          <Heading
            className="u__h2 uppercase"
            tag="span"
          >{`${firstName} ${lastName}`}</Heading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-4">
        {phone && (
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
              content={`<span className="u__f-700">${phone}</span>`}
            />
          </div>
        )}

        {emailAddress && (
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
              content={`<span className="u__f-700">${emailAddress}</span>`}
            />
          </div>
        )}

        {websiteUrl && (
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
              content={`<span className="u__f-700">${websiteUrl}</span>`}
            />
          </div>
        )}
        {location && (
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
              content={`<span className="u__f-700">${location}</span>`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const BasicDetailsSettings = ({
  firstName,
  lastName,
  phone,
  emailAddress,
  websiteUrl,
  location,
  handleFieldChange,
}) => {
  return (
    <>
      <div className="c__form">
        <div className="c__form__fields-wrapper">
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>First Name</Label>
            <TextareaAuto
              name={firstName.name}
              onChange={handleFieldChange(firstName.name)}
              value={firstName.value}
              placeholder="First Name"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Last Name</Label>
            <TextareaAuto
              name={lastName.name}
              onChange={handleFieldChange(lastName.name)}
              value={lastName.value}
              placeholder="Last Name"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Phone</Label>
            <TextareaAuto
              name={phone.name}
              onChange={handleFieldChange(phone.name)}
              value={phone.value}
              placeholder="Last Name"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Email Address</Label>
            <TextareaAuto
              name={emailAddress.name}
              onChange={handleFieldChange(emailAddress.name)}
              value={emailAddress.value}
              placeholder="Last Name"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Website URL</Label>
            <TextareaAuto
              name={websiteUrl.name}
              onChange={handleFieldChange(websiteUrl.name)}
              value={websiteUrl.value}
              placeholder="Last Name"
            />
          </div>
          <div className="c__form__fieldset c__form__fieldset--100">
            <Label>Location</Label>
            <TextareaAuto
              name={location.name}
              onChange={handleFieldChange(location.name)}
              value={location.value}
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    </>
  );
};
