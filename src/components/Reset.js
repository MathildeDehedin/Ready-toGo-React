import React from "react";
const Reset = ({ setSwitchValue1, setSwitchValue2, setSwitchValue3 }) => {
  return (
    <div>
      <button
        className="reset"
        onClick={() => {
          setSwitchValue1(false);
          setSwitchValue2(false);
          setSwitchValue3(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Reset;
