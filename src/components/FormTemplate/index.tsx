import React, {FC, useState} from 'react';
import "./style.css";
import useInput from "../../hooks/useInput";

export interface IFormTemplate {
  type: string;
  name: string;
  header: string;
  fieldTypeName: string;
  fieldMessage: string;
  buttonName: string;
  closeProp?: () => void;
}


const FormTemplate: FC<IFormTemplate> =
    ({
       type,
       name,
       header,
       fieldTypeName,
       fieldMessage,
       buttonName,
       closeProp
     }) => {

      const [textareaValue, setTextareaValue] = useState('');

      const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        contactDataField.setValue("");
        setTextareaValue("");
        contactDataField.setIsDirty(false);
        closeProp();

        console.log(contactDataField.value, textareaValue);
      }

      const contactDataField = useInput('', {isEmpty: true, minLength: 3});

      return (
          <div className="contact">
            <h3>{header}</h3>
            <form onSubmit={submitForm}>
              <label>
                <span>{fieldTypeName}</span>
                {(contactDataField.isDirty && contactDataField.isEmpty) && <div style={{color: "red", marginBottom: "1rem", fontSize: "1.2rem"}}>Поле не может быть пустым</div>}
                {(contactDataField.isDirty && contactDataField.minLengthError) && <div style={{color: "red", marginBottom: "1rem", fontSize: "1.2rem"}}>Некорректная длина</div>}
                <input
                    type={type}
                    name={name}
                    value={contactDataField.value}
                    onChange={e => contactDataField.onChange(e)}
                    onBlur={e => contactDataField.onBlur(e)}
                    required
                />
              </label>
              <label>
                <span>{fieldMessage}</span>
                <textarea
                    name="message"
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    required
                />
              </label>
              <button disabled={!contactDataField.inputValid} type="submit">{buttonName}</button>
            </form>
          </div>
      );
    };

export default FormTemplate;