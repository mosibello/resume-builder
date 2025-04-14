import React from "react";
import parse from "html-react-parser";

const IconWithText = ({ icon, content }) => {
  return (
    <div className="c__icon-with-text text-xs">
      <div className="c__icon-with-text__row">
        {icon && (
          <div className="c__icon-with-text__col">
            <figure className="m-0 d-inline">{icon}</figure>
          </div>
        )}
        {content && (
          <div className="c__icon-with-text__col">{parse(content)}</div>
        )}
      </div>
    </div>
  );
};

export default IconWithText;
