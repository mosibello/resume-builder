import React from "react";
import Container from "@/components/wrappers/Container";

const EditorTopbar = () => {
  return (
    <div className="c__editor-topbar u__background-dark py-6 u__text-inverted">
      <Container fluid>
        <div className="theme-row flex items-center -mx-1 justify-between">
          <div className="theme-column px-1 w-full max-w-3/4 flex justify-start items-center">
            <div className="theme-row flex items-center -mx-1">
              <div className="theme-column px-1 flex">
                <span className="COMPONENT__skeleton-box COMPONENT__skeleton-box-dark h-6 w-24 inline-block rounded"></span>
              </div>
              <div className="theme-column px-1 flex">
                <span className="COMPONENT__skeleton-box COMPONENT__skeleton-box-dark h-6 w-24 inline-block rounded"></span>
              </div>
            </div>
          </div>
          <div className="theme-column px-1 w-full flex justify-center items-center">
            <span className="COMPONENT__skeleton-box COMPONENT__skeleton-box-dark h-6 w-44 inline-block rounded "></span>
          </div>
          <div className="theme-column px-1 w-full max-w-3/4 flex justify-end items-center">
            <span className="COMPONENT__skeleton-box COMPONENT__skeleton-box-dark h-6 w-24 inline-block rounded"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditorTopbar;
