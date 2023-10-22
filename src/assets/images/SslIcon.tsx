import React from "react";

const SslIcon = () => {
  return (
    <svg
      width="100"
      height="50"
      viewBox="0 0 76 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="76" height="38" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(-0.00094518 -0.152174) scale(0.00250473 0.00500945)"
          />
        </pattern>
        <image
          id="image0"
          width="400"
          height="230"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default SslIcon;
