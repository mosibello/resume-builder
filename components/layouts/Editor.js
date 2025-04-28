"use client";
import React, { useState, useEffect } from "react";
import EditorTopbar from "@/components/partials/EditorTopbar";
import ResumeViewport from "@/components/partials/ResumeViewport";
import { BasicDetailsSettings } from "@/components/layouts/resume/panels/BasicDetails";
import EditorInfobar from "@/components/partials/EditorInfobar";
import { ExperienceSettings } from "@/components/layouts/resume/panels/Experience";
import PrimaryNavigationItem from "@/components/layouts/resume/PrimaryNavigationItem";
import { arrayMove } from "@dnd-kit/sortable";
import { generateRandomUID } from "@/lib/helpers.js";
import CanvasSettings from "components/layouts/resume/CanvasSettings";

const addNamesToFields = (fields) =>
  Object.fromEntries(
    Object.entries(fields).map(([key, val]) => [key, { ...val, name: key }])
  );

const primaryNavigation = [
  { name: `basic-details`, label: `Basic Details` },
  { name: `canvas`, label: `Canvas` },
];

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
      canvas: {
        repeater: {
          sortingLabel: `moduleLabel`,
          modules: [
            {
              id: 1,
              moduleType: `experience`,
              moduleLabel: `Experience`,
              content: {
                repeater: {
                  sortingLabel: "jobTitle",
                  content: [
                    {
                      id: 1,
                      jobTitle: `Senior Software Engineer, Frontend`,
                      organization: `Taylor Corporation`,
                      startDate: new Date("2023-04-01"),
                      endDate: new Date(),
                      description: `<p>Taylor Corporation is a graphical communications company with more than 10,000 employees headquartered in North Mankato, Minnesota</p>`,
                    },
                    {
                      id: 2,
                      jobTitle: `Senior Software Engineer, Frontend`,
                      organization: `Taylor Corporation`,
                      startDate: new Date("2023-04-01"),
                      endDate: new Date(),
                      description: `<p>Taylor Corporation is a graphical communications company with more than 10,000 employees headquartered in North Mankato, Minnesota</p>`,
                    },
                  ],
                },
              },
            },
            {
              id: 2,
              moduleType: `education`,
              moduleLabel: `Education`,
              content: {
                repeater: {
                  sortingLabel: "degreeTitle",
                  content: [
                    {
                      id: 1,
                      degreeTitle: `BSc Hons Double Majors in Economics & Management`,
                      school: `University of London International Programmes`,
                      startDate: `2012`,
                      endDate: `2016`,
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  });

  const [activePanel, setActivePanel] = useState(null);

  const [canvasEditingMeta, setCanvasEditingMeta] = useState({
    editing: false,
    index: null,
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

  const canvasHandlers = {
    add: (newModule) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: [...modules, newModule],
              },
            },
          },
        };
      });
    },

    delete: (indexToDelete) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const filtered = modules.filter((_, idx) => idx !== indexToDelete);

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: filtered,
              },
            },
          },
        };
      });
    },

    clone: (indexToClone) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const itemToClone = modules[indexToClone];

        if (!itemToClone) return prev;

        const clonedItem = structuredClone(itemToClone);

        clonedItem.id = generateRandomUID();

        // Generate new IDs for nested repeater content items, if any
        if (clonedItem?.content?.repeater?.content) {
          clonedItem.content.repeater.content =
            clonedItem.content.repeater.content.map((item) => ({
              ...item,
              id: generateRandomUID(),
            }));
        }

        const newModules = [
          ...modules.slice(0, indexToClone + 1),
          clonedItem,
          ...modules.slice(indexToClone + 1),
        ];

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: newModules,
              },
            },
          },
        };
      });
    },

    move: (activeId, overId) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;

        const oldIndex = modules.findIndex((x) => x.id === activeId);
        const newIndex = modules.findIndex((x) => x.id === overId);

        if (oldIndex === -1 || newIndex === -1) {
          console.warn("Could not find modules to move.");
          return prev;
        }

        const reordered = arrayMove(modules, oldIndex, newIndex);

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: reordered,
              },
            },
          },
        };
      });
    },
  };

  const repeaterHandlers = {
    add: (moduleIndex, newItem) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const targetModule = modules[moduleIndex];

        const updatedModules = [...modules];
        updatedModules[moduleIndex] = {
          ...targetModule,
          content: {
            ...targetModule.content,
            repeater: {
              ...targetModule.content.repeater,
              content: [...targetModule.content.repeater.content, newItem],
            },
          },
        };

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: updatedModules,
              },
            },
          },
        };
      });
    },

    delete: (moduleIndex, indexToDelete) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const targetModule = modules[moduleIndex];

        const filteredItems = targetModule.content.repeater.content.filter(
          (_, idx) => idx !== indexToDelete
        );

        const updatedModules = [...modules];
        updatedModules[moduleIndex] = {
          ...targetModule,
          content: {
            ...targetModule.content,
            repeater: {
              ...targetModule.content.repeater,
              content: filteredItems,
            },
          },
        };

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: updatedModules,
              },
            },
          },
        };
      });
    },

    clone: (moduleIndex, indexToClone) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const targetModule = modules[moduleIndex];
        const items = targetModule.content.repeater.content;
        const itemToClone = items[indexToClone];

        if (!itemToClone) return prev;

        const clonedItem = structuredClone(itemToClone);
        clonedItem.id = generateRandomUID();

        const newItems = [
          ...items.slice(0, indexToClone + 1),
          clonedItem,
          ...items.slice(indexToClone + 1),
        ];

        const updatedModules = [...modules];
        updatedModules[moduleIndex] = {
          ...targetModule,
          content: {
            ...targetModule.content,
            repeater: {
              ...targetModule.content.repeater,
              content: newItems,
            },
          },
        };

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: updatedModules,
              },
            },
          },
        };
      });
    },

    move: (moduleIndex, activeId, overId) => {
      setResumeData((prev) => {
        const modules = prev.content.canvas.repeater.modules;
        const targetModule = modules[moduleIndex];
        const items = targetModule.content.repeater.content;

        if (!Array.isArray(items)) {
          console.warn(
            `Repeater content not found for moduleIndex: ${moduleIndex}`
          );
          return prev;
        }

        const oldIndex = items.findIndex((x) => x.id === activeId);
        const newIndex = items.findIndex((x) => x.id === overId);

        if (oldIndex === -1 || newIndex === -1) {
          console.warn(`Could not find item to move in repeater.`);
          return prev;
        }

        const reordered = arrayMove(items, oldIndex, newIndex);

        const updatedModules = [...modules];
        updatedModules[moduleIndex] = {
          ...targetModule,
          content: {
            ...targetModule.content,
            repeater: {
              ...targetModule.content.repeater,
              content: reordered,
            },
          },
        };

        return {
          ...prev,
          content: {
            ...prev.content,
            canvas: {
              ...prev.content.canvas,
              repeater: {
                ...prev.content.canvas.repeater,
                modules: updatedModules,
              },
            },
          },
        };
      });
    },
  };

  const updateNestedField = (obj, path, value) => {
    if (!path.length) return value;

    const [key, ...rest] = path;

    // If obj is undefined/null (can happen when creating new entries), initialize it
    const isIndex = typeof key === "number";
    const current = obj ?? (isIndex ? [] : {});

    if (rest.length === 0) {
      if (isIndex) {
        const newArray = Array.isArray(current) ? [...current] : [];
        newArray[key] = value;
        return newArray;
      } else {
        return {
          ...current,
          [key]: value,
        };
      }
    }

    if (isIndex) {
      const newArray = Array.isArray(current) ? [...current] : [];
      newArray[key] = updateNestedField(current[key], rest, value);
      return newArray;
    } else {
      return {
        ...current,
        [key]: updateNestedField(current[key], rest, value),
      };
    }
  };

  const handleRepeaterFieldChange = (moduleIndex, pathArray, value) => {
    setResumeData((prev) => {
      const modules = prev.content.canvas.repeater.modules;

      const targetModule = modules[moduleIndex];

      const targetContent = targetModule.content ?? {};
      const targetRepeater = targetContent.repeater ?? { content: [] };

      const updatedContent = updateNestedField(
        { ...targetContent, repeater: targetRepeater },
        pathArray,
        value
      );

      const updatedModules = [...modules];
      updatedModules[moduleIndex] = {
        ...targetModule,
        content: updatedContent,
      };

      return {
        ...prev,
        content: {
          ...prev.content,
          canvas: {
            ...prev.content.canvas,
            repeater: {
              ...prev.content.canvas.repeater,
              modules: updatedModules,
            },
          },
        },
      };
    });
  };

  const handleActivePanel = (e, index, clearAll = false) => {
    setActivePanel((prev) => {
      if (clearAll) return null;

      let updated = Array.isArray(prev) ? [...prev] : [];

      if (index !== 0 && index !== 1) {
        console.warn("Invalid index for active panel. Must be 0 or 1.");
        return prev;
      }
      while (updated.length <= index) {
        updated.push(null);
      }
      updated[index] = e ? { label: e.label, name: e.name } : null;
      while (updated.length && updated[updated.length - 1] === null) {
        updated.pop();
      }
      const isAllNull = updated.every((item) => item === null);
      return updated.length === 0 || isAllNull ? null : updated;
    });
  };

  const handleCanvasEditingMeta = (object) => {
    setCanvasEditingMeta(object);
  };

  useEffect(() => {
    setResumeData((prev) => ({
      ...prev,
      content: addNamesToFields(prev.content),
    }));
  }, []);

  // useEffect(() => {
  //   console.log(resumeData.content);
  // }, [resumeData]);

  useEffect(() => {
    console.log(`active panel:`, activePanel);
  }, [activePanel]);

  useEffect(() => {
    console.log(`active canvas editing meta:`, canvasEditingMeta);
  }, [canvasEditingMeta]);

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
                {activePanel ? (
                  <div className="theme-box">
                    <div className="text-sm breadcrumbs">
                      <ul>
                        <li
                          className="cursor-pointer hover:theme-primary"
                          onClick={() => {
                            handleActivePanel(null, null, true);
                            handleCanvasEditingMeta({
                              editing: false,
                              index: null,
                            });
                          }}
                        >
                          <span className="text-[var(--t-primary-branding-color)] hover:text-[--t-primary-branding-hover-color] hover:underline">
                            Home
                          </span>
                        </li>
                        {activePanel.length > 1 ? (
                          <>
                            <li
                              onClick={() => {
                                handleActivePanel(null, 1);
                                handleCanvasEditingMeta({
                                  editing: false,
                                  index: null,
                                });
                              }}
                            >
                              <span className="text-[var(--t-primary-branding-color)] hover:text-[--t-primary-branding-hover-color] hover:underline cursor-pointer">
                                {activePanel[0]?.label}
                              </span>
                            </li>
                            <li>
                              <span
                                className="text-gray-400 truncate cursor-not-allowed"
                                style={{ width: `200px` }}
                              >
                                {activePanel[1]?.label}
                              </span>
                            </li>
                          </>
                        ) : (
                          <li>
                            <span
                              className="text-gray-400 truncate cursor-not-allowed"
                              style={{ width: `200px` }}
                            >
                              {activePanel[0]?.label}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <h2 className="text-xl font-medium">
                      {activePanel?.label}
                    </h2>
                  </div>
                ) : (
                  <h2 className="text-xl font-medium">Edit Resume</h2>
                )}
              </div>
            </div>
            <div className="theme-box text-theme-text-light border-t border-theme-border ">
              <div className="theme-row bg-theme-panel-dark flex flex-items-center">
                <div className="theme-column w-full false">
                  <div className="theme-box font-medium px-4 py-4 border-theme-border border-b">
                    {activePanel ? `Content` : `Navigation`}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ height: "calc(100vh - 57px - 60px - 125px)" }}
              className="theme-box bg-theme-panel overflow-y-auto pb-24"
            >
              {!activePanel && (
                <div className="c__editor__sidebar__primary-navigation">
                  {primaryNavigation.map((elem, idx) => {
                    return (
                      <PrimaryNavigationItem
                        key={idx}
                        handleActivePanel={handleActivePanel}
                        name={elem.name}
                        label={elem.label}
                      />
                    );
                  })}
                </div>
              )}
              {activePanel && (
                <div className="c__editor__sidebar__editor-form px-[1rem] py-[1.25rem] bg-theme-panel-dark border-theme-border border-b">
                  {activePanel[0]?.name === `basic-details` && (
                    <BasicDetailsSettings
                      firstName={resumeData.content.firstName}
                      lastName={resumeData.content.lastName}
                      phone={resumeData.content.phone}
                      emailAddress={resumeData.content.emailAddress}
                      websiteUrl={resumeData.content.websiteUrl}
                      location={resumeData.content.location}
                      handleFieldChange={handleFieldChange}
                    />
                  )}
                  {activePanel[0]?.name === `canvas` && (
                    <CanvasSettings
                      activePanel={activePanel}
                      handleCanvasEditingMeta={handleCanvasEditingMeta}
                      canvasEditingMeta={canvasEditingMeta}
                      handleActivePanel={handleActivePanel}
                      settings={resumeData.content.canvas}
                      repeaterHandlers={repeaterHandlers}
                      canvasHandlers={canvasHandlers}
                      panelKey="canvas"
                      handleRepeaterFieldChange={handleRepeaterFieldChange}
                    />
                  )}
                </div>
              )}
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
