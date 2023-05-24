import React from 'react';
import FormTemplate from "../../FormTemplate";
import {formFieldsContacts} from "../../../utils/menus";

const InfoContacts = () => {
  return (
      <FormTemplate
          type={formFieldsContacts.type}
          name={formFieldsContacts.name}
          buttonName={formFieldsContacts.buttonName}
          fieldMessage={formFieldsContacts.fieldMessage}
          fieldTypeName={formFieldsContacts.fieldTypeName}
          header={formFieldsContacts.header}
          />
  );
};

export default InfoContacts;