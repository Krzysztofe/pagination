import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { inputValueChange } from "../../../redux/features/slice";

const InputID = () => {
  const [inputError, setInputError] = useState("");

  const dispatch = useDispatch();
  const inputValuey = useSelector(
    (state: RootState) => state.inputValuex.value
  );

  const handleValidation = (e: any) => {
    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) {
      e.preventDefault();
      setInputError("Podaj cyfrę");
      return;
    }
    setInputError("");
  };

  return (
    <div>
      <div className="inputContainer">
        <label htmlFor="input" className="label">
          Podaj nr id produktu
        </label>
        <input
          type="text"
          value={inputValuey}
          onKeyDown={handleValidation}
          onChange={e => dispatch(inputValueChange(e.target.value))}
          id="input"
        />
        <p className="inputError">{inputError}</p>
      </div>
    </div>
  );
};

export default InputID;
