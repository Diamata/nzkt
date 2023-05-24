import React, {useEffect, useState} from 'react';

export interface IValidations {
  minLength: number;
  isEmpty: boolean;
}

const useValidation = (value: string, validations: IValidations) => {

  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  },[isEmpty, minLengthError])

  return {
    isEmpty,
    minLengthError,
    inputValid
  }
};

export default useValidation;