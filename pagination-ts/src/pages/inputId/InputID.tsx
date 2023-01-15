import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { inputValueChange } from "../../redux/features/slice";
import { useNavigate, useParams } from "react-router-dom";
import useInputValidation from "../../hooks/useInputValidation";

const InputID = () => {
  const [eventData, setEventData] = useState();
  const { inputError, inputValidation } = useInputValidation();
  const inputValueId = useSelector(
    (state: RootState) => state.inputValuex.value
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    if (inputValueId) {
      navigate(`/${inputValueId}`);
    }
    if (eventData === null) {
      navigate(`/`);
    }
  }, [inputValueId, eventData]);

  const handleNativeEvent = (e: any): void => {
    setEventData(e.nativeEvent.data)
  };


// function handleClick(event: Event) {
//   const target = event.target as HTMLButtonElement;
//   if (target) console.log(target.value);
// }


  return (
    <div>
      <div className="inputContainer">
        <label htmlFor="input" className="label">
          Podaj nr id produktu
        </label>
        <input
          type="text"
          defaultValue={id ? id : inputValueId}
          onKeyDown={inputValidation}
          onChange={e => {
            dispatch(inputValueChange(e.target.value));
            handleNativeEvent(e);
          }}
        />
        <p className="inputError">{inputError}</p>
      </div>
    </div>
  );
};

export default InputID;
