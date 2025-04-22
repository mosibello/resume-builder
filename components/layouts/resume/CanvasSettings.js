"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { RepeaterField } from "@/components/ui/FormElements";
import { generateRandomUID } from "@/lib/helpers.js";
import { ExperienceSettings } from "@/components/layouts/resume/panels/Experience";

const repeaterFields = () => {
  let meta = {
    moduleLabel: `Choose Module`,
    id: generateRandomUID(),
  };
  return meta;
};

let defaultRepeaterLength = 2;

const CanvasSettings = ({
  settings,
  repeaterHandlers,
  canvasHandlers,
  handleRepeaterFieldChange,
  handleActivePanel,
  canvasEditingMeta,
  handleCanvasEditingMeta,
  activePanel,
}) => {
  const { sortingLabel } = settings.repeater;
  const repeater = settings.repeater.modules;

  const [readyToAddIndex, setReadyToAddIndex] = useState(
    defaultRepeaterLength + 1
  );

  const handleFieldChange = (pathArray) => (e) => {
    const value = e.target.value;
    handleRepeaterFieldChange(pathArray, value);
  };
  return (
    <>
      <RepeaterField
        label="Modules"
        activePanel={activePanel}
        name="modules"
        id={`modules-repeater-field`}
        repeaterEditingMeta={canvasEditingMeta}
        repeater={repeater}
        sortingLabel={sortingLabel || ``}
        handleAdd={() => {
          const newIndex = readyToAddIndex + 1;
          setReadyToAddIndex(newIndex);
          canvasHandlers.add(repeaterFields());
        }}
        handleEdit={(index) => {
          handleCanvasEditingMeta({
            editing: true,
            index,
          });
          handleActivePanel(
            {
              label: repeater[index]?.moduleLabel,
              name: repeater[index]?.moduleType,
            },
            1
          );
        }}
        handleFinishEdit={(index) => {
          handleCanvasEditingMeta({
            editing: false,
            index,
          });
        }}
        handleClone={(index) => {
          canvasHandlers.clone(index);
        }}
        handleDelete={(index) => {
          canvasHandlers.delete(index);
        }}
        handleMove={(active, over) => {
          canvasHandlers.move(active.id, over.id);
        }}
      >
        {canvasEditingMeta && repeater && repeater.length > 0 && (
          <>
            {repeater.map((elem, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: `${
                      index === canvasEditingMeta.index ? "block" : "none"
                    }`,
                  }}
                >
                  {elem.moduleType === `experience` && (
                    <ExperienceSettings
                      settings={elem.content}
                      repeaterHandlers={repeaterHandlers}
                      panelKey="experience"
                      handleRepeaterFieldChange={handleRepeaterFieldChange}
                    />
                  )}
                </div>
              );
            })}
          </>
        )}
      </RepeaterField>

      {/* <div className="mt-[1rem]">
        <Button
          title="Add Module"
          theme={`secondary c__button--secondary--light`}
          size="small"
        />
      </div> */}
    </>
  );
};

export default CanvasSettings;
