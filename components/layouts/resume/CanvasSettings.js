import React from "react";

export const CanvasSettings = ({
  settings,
  repeaterHandlers,
  panelKey,
  handleRepeaterFieldChange,
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
    handleRepeaterFieldChange(pathArray, value);
  };

  return (
    <>
      <RepeaterField
        wrapperClassName=""
        label="Module Canvas"
        name="module-canvas-repeater-field"
        id={`module-canvas-repeater-field`}
        repeaterEditingMeta={repeaterEditingMeta}
        repeater={repeater}
        sortingLabel={sortingLabel}
        handleAdd={() => {
          const newIndex = readyToAddIndex + 1;
          setReadyToAddIndex(newIndex);
          repeaterHandlers.add(panelKey, repeaterFields());
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
          repeaterHandlers.clone(panelKey, index);
        }}
        handleDelete={(index) => {
          repeaterHandlers.delete(panelKey, index);
        }}
        handleMove={(active, over) => {
          repeaterHandlers.move("experience", active.id, over.id);
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
                              "experience",
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
                              "experience",
                              "repeater",
                              "content",
                              repeaterEditingMeta.index,
                              "organization",
                            ])}
                            value={elem.organization}
                            placeholder="Organization"
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
