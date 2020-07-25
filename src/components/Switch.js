import React from "react";
const Switch = ({ value, setSwitchValue }) => {
  return (
    <div>
      <div className="button">
        <div
          className={value === false ? "OFF" : "ON"}
          onClick={() => {
            setSwitchValue(!value);
          }}
        >
          <div>{value === false ? "OFF" : "ON"}</div>
        </div>
      </div>
    </div>
  );
};
export default Switch;
