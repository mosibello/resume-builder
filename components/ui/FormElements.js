"use client";
import React, { useCallback, useState } from "react";
import Select from "react-select";
import TextareaAutosize from "react-textarea-autosize";

import { useEditor, EditorContent } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

import { Content } from "@tiptap/react";
import { MinimalTiptapEditor } from "@/components/ui//minimal-tiptap";

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

const RichtextMenubar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  // const openModal = useCallback(() => {
  //   console.log(editor.chain().focus());
  //   setUrl(editor.getAttributes("link").href);
  //   setIsOpen(true);
  // }, [editor]);

  // const closeModal = useCallback(() => {
  //   setIsOpen(false);
  //   setUrl("");
  // }, []);

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z" />
        </svg>
      </button>

      {/* 
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("link") ? "is-active" : ""}
      >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>


      </button> */}

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
        </svg>
      </button>

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit link</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="c__form mt-[0.5rem]">
            <Input value="" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const RichtextEditor = (props) => {
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Link.configure({
  //       openOnClick: false,
  //     }),
  //   ],
  //   content: "<p>Hello World! 🌎️</p>",
  //   editorProps: {
  //     attributes: {
  //       class:
  //         "prose p-4 focus:outline-none CUSTOM__rich-text-editor__content-editable",
  //     },
  //   },
  // });

  const [value, setValue] = useState("");

  return (
    // <div className="CUSTOM__rich-text-editor bg-white bg-clip-padding border border-solid border-gray-300 rounded">
    //   <div className="CUSTOM__rich-text-editor__header bg-theme-panel-dark rounded-tl rounded-tr text-sm px-4 py-2 border-b border-solid border-gray-300">
    //     <RichtextMenubar name={props.name} editor={editor} />
    //   </div>
    //   <div className="CUSTOM__rich-text-editor__body bg-white">
    //     <EditorContent editor={editor} />
    //   </div>
    // </div>

    <MinimalTiptapEditor
      value={value}
      onChange={setValue}
      className="w-full u__background-white"
      editorContentClassName="p-5 h-full"
      output="html"
      placeholder="Enter your description..."
      autofocus={true}
      editable={true}
      editorClassName="focus:outline-hidden"
    />
  );
};
