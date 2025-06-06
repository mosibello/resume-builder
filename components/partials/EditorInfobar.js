import React from "react";
import Container from "@/components/wrappers/Container";
import Button from "@/components/ui/Button";

const EditorTopbar = () => {
  return (
    <div className="c__editor-infobar py-3 bg-white text-theme-text border-b border-theme-border">
      <Container fluid>
        <div className="theme-row flex items-center -mx-1 justify-between">
          <div className="theme-column px-1">
            <Button title="Settings" theme={`secondary`} size="small" />
          </div>
          <div className="theme-column px-1">
            <div className="theme-row flex items-center -mx-1">
              <div className="theme-column px-1">
                <Button
                  title="Preview"
                  theme={`secondary`}
                  size="small"
                  icon={`<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`}
                  iconPosition={`after`}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditorTopbar;
