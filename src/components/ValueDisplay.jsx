import React from "react";

export const ValueDisplay = ({ value, percent, label }) => {
  return (
    <div>
      <p className="value-display">
        {value}
        {percent && (
          <span className={`percent ${percent > 0 ? "up" : "down"}`}>
            {percent}%
          </span>
        )}
      </p>
      <p className="label">{label}</p>
    </div>
  );
};
