import React, {useState} from "react";
import useValidation, {IValidations} from "./useValidation";

const useInput = (initialValue: string, validations: IValidations) => {

  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true)
  }

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    setIsDirty,
    ...valid
  }
};

export default useInput;