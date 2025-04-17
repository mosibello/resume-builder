"use client";
import React from "react";
import Select from "react-select";
import TextareaAutosize from "react-textarea-autosize";

export const Label = ({ name, children }) => {
  return (
    <div className="mb-2">
      <label className="font-small block" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export const Input = ({
  name,
  autoComplete,
  type = `text`,
  placeholder,
  onChange,
  required,
  pattern,
  errors,
  readOnly,
  value,
  className,
}) => {
  const classNames = ``;
  return (
    <input
      name={name}
      id={name}
      aria-labelledby={name}
      autoComplete={autoComplete}
      className={`c__form__input ${classNames} ${className ? className : ``} ${
        errors?.name ? `c__form__input--error` : ``
      }`}
      type={type}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      onChange={onChange}
      value={value}
      {...(typeof register === "function"
        ? register(name, {
            required: required?.message ?? required,
            pattern: pattern ?? undefined,
          })
        : {})}
    />
  );
};

export const Textarea = ({
  name,
  autoComplete,
  type = `textarea`,
  placeholder,
  required,
  pattern,
  errors,
  readOnly,
  onChange,
  rows,
  value,
  className,
}) => {
  return (
    <textarea
      name={name}
      id={name}
      aria-labelledby={name}
      className={`c__form__input ${className ? className : ``} ${
        errors?.name ? `c__form__input--error` : ``
      }`}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      readOnly={readOnly}
      onChange={onChange}
      rows={rows}
      value={value}
      {...(typeof register === "function"
        ? register(name, {
            required: required?.message ?? required,
            pattern: pattern ?? undefined,
          })
        : {})}
    ></textarea>
  );
};

export const TextareaAuto = ({
  name,
  autoComplete,
  type = `textarea`,
  placeholder,
  required,
  pattern,
  errors,
  readOnly,
  onChange,
  rows,
  value,
  className,
}) => {
  return (
    <TextareaAutosize
      name={name}
      id={name}
      aria-labelledby={name}
      className={`c__form__input ${className ? className : ``} ${
        errors?.name ? `c__form__input--error` : ``
      }`}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      readOnly={readOnly}
      onChange={onChange}
      rows={rows}
      maxRows={6}
      style={{ resize: "none" }}
      value={value}
      {...(typeof register === "function"
        ? register(name, {
            required: required?.message ?? required,
            pattern: pattern ?? undefined,
          })
        : {})}
    ></TextareaAutosize>
  );
};

export default ({
  isMulti,
  options,
  className,
  defaultValue = [],
  onChange,
  onBlur,
  value,
  name,
}) => (
  <Select
    defaultValue={defaultValue}
    isMulti={isMulti}
    name={name}
    id={name}
    options={options}
    className={`basic-multi-select ${className}`}
    classNamePrefix="select"
    closeMenuOnSelect={!isMulti}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);
