import React, {FC, useState} from 'react';
import "./style.css";
import { FiPhoneCall } from 'react-icons/fi';
import {Arrow} from "../../utils/svgs";
import ProductsList from "../ProductInfos/ProductsList";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import FormTemplate from "../FormTemplate";
import {formFieldsModalCallback} from "../../utils/menus";

const Contacts: FC = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  const { isShown, toggle } = useModal();

  return (
      <div className="contacts">

        <div className="contacts__location">
          <p className="contacts__location-title">Расположение завода</p>
          <p className="contacts__city">Санкт-Петербург</p>
          <div className={isActive ? "contacts__menu-arrow active" : "contacts__menu-arrow"} onClick={() => setIsActive(!isActive)}><Arrow /></div>
          <p className="contacts__address">ул. Предпортовая 6, к 14</p>
        </div>

        <div className="contacts__working-schedule">
          <p className="contacts__working-hours">Время работы</p>
          <p className="contacts__working-days">Пн.- Пт., 09:00—18:00</p>
        </div>

        <div className="contacts__phone-block">
          <div className="contacts__phone">
            <a href="tel:+380441234567">8 (800) 600-17-86</a>
          </div>

          <button className="contacts__call-button contacts__call-button_sm" onClick={toggle}><FiPhoneCall /></button>
          <button className="contacts__call-button contacts__call-button_lg" onClick={toggle}>Заказать звонок</button>
        </div>

        <ProductsList props={{isActive, setIsActive}}/>

        <Modal
            isShown={isShown}
            hide={toggle}
            modalContent={
              <FormTemplate
                  type={formFieldsModalCallback.type}
                  name={formFieldsModalCallback.name}
                  buttonName={formFieldsModalCallback.buttonName}
                  fieldMessage={formFieldsModalCallback.fieldMessage}
                  fieldTypeName={formFieldsModalCallback.fieldTypeName}
                  header={formFieldsModalCallback.header}
                  closeProp={toggle}
              />
        } />

      </div>
  );
};

export default Contacts;