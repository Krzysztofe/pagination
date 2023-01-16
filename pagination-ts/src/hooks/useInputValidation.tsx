import { useState } from "react";

const useInputValidation = () => {
  const [inputError, setInputError] = useState("");

  const inputValidation = (e:any) => {
    if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) {
      e.preventDefault();
      setInputError("Podaj cyfrę");
      return;
    }
    setInputError("");
  };

  return { inputError, inputValidation };
};

export default useInputValidation;
