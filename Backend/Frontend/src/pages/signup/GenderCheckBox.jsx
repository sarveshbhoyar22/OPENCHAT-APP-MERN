import React from "react";


function GenderCheckBox({onCheckBoxChange, selectedGender}) {
  return (
    <div className="flex ">
      <div className="form-control">
        <label
          className={`label label-text gap-2 cursor-pointer ${
            selectedGender === "male" ? selectedGender : ""
          }`}
        >
          <span className="label-text "> Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "male"}
            onChange={() => 
            onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label label-text gap-2 cursor-pointer ${
            selectedGender === "female" ? selectedGender : ""
          }`}
        >
          <span className="label-text "> Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "female"}
            onChange={() => 
            onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox;
