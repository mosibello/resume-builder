"use client";
import React, { useCallback, useState } from "react";
import Select from "react-select";
import TextareaAutosize from "react-textarea-autosize";
import { useAppContext } from "@/context/AppWrapper";
import { format } from "date-fns";
import { MinimalTiptapEditor } from "@/components/ui//minimal-tiptap";
import { Button } from "@/components/ui/shadcn/button";
import { Calendar } from "@/components/ui/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

export const RichtextEditor = ({ value, setValue }) => {
  // const [value, setValue] = useState("");
  // console.log(value);

  return (
    <MinimalTiptapEditor
      value={value}
      onChange={setValue}
      className="w-full u__background-white"
      editorContentClassName="p-5 h-full"
      output="html"
      placeholder="Add content here..."
      autofocus={false}
      editable={true}
      editorClassName="focus:outline-hidden min-h-[10rem]"
    />
  );
};

export const DatePicker = ({ date, setDate }) => {
  // const [date, setDate] = React.useState();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
      </PopoverContent>
    </Popover>
  );
};

export const RepeaterField = (props) => {
  const { repeater, repeaterEditingMeta, sortingLabel, id, activePanel } =
    props;
  const [activeId, setactiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <>
      <div className={props.wrapperClassName}>
        <div
          className={`${activePanel && activePanel.length > 1 ? `hidden` : ``}`}
        >
          {props.label && (
            <div className="mb-2 flex items-center justify-between">
              <label
                className="text-theme-text-light font-small block"
                htmlFor={props.name}
              >
                {props.label}
              </label>
              <div>
                <span
                  onClick={props.handleAdd}
                  className="text-[var(--t-primary-branding-color)] block text-xs cursor-pointer hover:underline"
                >
                  + Add
                </span>
              </div>
            </div>
          )}

          {repeater && repeater.length > 0 && (
            <div className="mt-2">
              <DndContext
                id={id}
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={repeater}
                  strategy={verticalListSortingStrategy}
                >
                  {repeater.map((elem, index) => {
                    return (
                      <RepeaterListItem
                        key={elem.id}
                        elem={elem}
                        index={index}
                        sortingLabel={sortingLabel}
                        repeaterName={props.name}
                        repeaterEditingMeta={repeaterEditingMeta}
                        handleEdit={props.handleEdit}
                        handleClone={props.handleClone}
                        handleDelete={props.handleDelete}
                        id={elem.id}
                      />
                    );
                  })}
                </SortableContext>
                <DragOverlay>
                  {activeId ? (
                    <RepeaterListItem
                      elem={repeater.find((x) => x.id === activeId)}
                      sortingLabel={sortingLabel}
                      // handleEdit={props.handleEdit}
                      // handleClone={props.handleClone}
                      // handleDelete={props.handleDelete}
                    />
                  ) : null}
                </DragOverlay>
              </DndContext>
            </div>
          )}
        </div>

        {props.children}
      </div>
    </>
  );
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      return props.handleMove(active, over);
    }
    setactiveId(null);
  }
  // function handleDragEnd(event) {
  //   const { active, over } = event;

  //   if (!active?.id || !over?.id) return;

  //   if (active.id !== over.id) {
  //     props.handleMove(active, over);
  //   }

  //   // Always clear drag state
  //   setactiveId(null);
  // }

  function handleDragStart(event) {
    props.handleFinishEdit();
    setactiveId(event.active.id);
  }
};

export const RepeaterListItem = ({
  elem,
  index,
  repeaterName,
  repeaterEditingMeta,
  handleEdit,
  handleClone,
  handleDelete,
  sortingLabel,
  id,
}) => {
  const { handlers } = useAppContext();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      id={id}
      data-attribute-id={id}
      ref={setNodeRef}
      style={style}
      key={index}
      className={`border flex items-center justify-between border-theme-border bg-white px-3 pl-4 py-2 ${
        index > 0 && `border-t-0`
      }`}
    >
      <span className="text-theme-text-light text-sm block truncate pr-5 flex items-center">
        <button
          type="button"
          {...listeners}
          {...attributes}
          className="pr-3 cursor-grab"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "5px", height: "24px" }}
          >
            <path
              fill="#516f90"
              d="M0 0h2v2H0V0zm0 8h2v2H0V8zm0 8h2v2H0v-2zM0 4h2v2H0V4zm0 8h2v2H0v-2zm0 8h2v2H0v-2zM3 0h2v2H3V0zm0 8h2v2H3V8zm0 8h2v2H3v-2zM3 4h2v2H3V4zm0 8h2v2H3v-2zm0 8h2v2H3v-2z"
            />
          </svg>
        </button>
        <span className="truncate pr-3">
          {elem ? elem[sortingLabel] : `...`}
        </span>
      </span>
      <div className="flex theme-row text-theme-notify -mx-2 items-center">
        {repeaterEditingMeta && repeaterEditingMeta.index === index && (
          <div className="theme-column px-2">
            <div className="badge bg-[var(--t-primary-branding-color)] text-[var(--t-cp-base-white)] border-none flex">
              <span style={{ fontSize: "0.6rem" }}>Editing</span>
            </div>
          </div>
        )}
        <div
          className="theme-column p-[6px] hover:bg-[#f5f8fa] rounded-md cursor-pointer text-[var(--t-primary-branding-color)]"
          onClick={() => {
            handleEdit(index),
              handlers.handleRepeaterMeta({
                repeaterName,
                editingIndex: index,
              });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        <div
          className="theme-column p-[6px] hover:bg-[#f5f8fa] rounded-md cursor-pointer text-[var(--t-primary-branding-color)]"
          onClick={() => handleClone(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div
          className="theme-column p-[6px] hover:bg-[#f5f8fa] rounded-md cursor-pointer text-[var(--t-primary-branding-color)]"
          onClick={() => handleDelete(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
