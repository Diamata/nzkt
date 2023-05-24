import React from 'react';
import "./style.css";
import Modal from "../Modal";
import FormTemplate from "../FormTemplate";
import {formFieldsModalCallback} from "../../utils/menus";
import useModal from "../../hooks/useModal";

const PreFooter = () => {

  const { isShown, toggle } = useModal();

  return (
      <div className="prefooter">

        <p className="prefooter__nav">Навигация</p>
        <ul className="prefooter__nav-list">
          <li>Главная</li>
          <li>О заводе</li>
          <li>Оборудование</li>
          <li>Наша продукция</li>
          <li>Документы</li>
          <li>Арматура</li>
          <li>Доставка</li>
          <li>Контакты</li>
        </ul>

        <p className="prefooter__prod">Продукция</p>
        <ul className="prefooter__prod-list">
          <li>Композитная арматура</li>
          <li>Композитная сетка</li>
          <li>Гнутые композитные элементы</li>
          <li>Гибкие композитные связи</li>
          <li>Гидроизоляционные смеси</li>
          <li>Фиксаторы арматуры</li>
          <li>Композитные профильные изделия</li>
          <li>Фибра стеклопластиковая и базальтовая</li>
        </ul>

        <div className="prefooter__call">
          <a href="tel:+380441234567">8 (800) 600-17-86</a>
        </div>

        <p className="prefooter__warehouses">Склады в РФ:</p>
        <ul className="prefooter__warehouses-list">
          <li>Нижний Новгород</li>
          <li>Москва</li>
          <li>Санкт-Петербург</li>
          <li>Ростов на дону</li>
        </ul>

        <div className="prefooter__contacts">
          <button className="prefooter__call-button" onClick={toggle}>Заказать звонок</button>
          <p className="prefooter__central-office">Центральный офис</p>
          <p className="prefooter__central-office-address">г. Нижний Новгород, ул. Маршала Казакова, 3А</p>
          <a href="mailto: info@nzkt.ru">info@nzkt.ru</a>
        </div>

        <p className="prefooter__contact-manager">Перед посещением склада обязательно свяжитесь с нашим менеджером по телефону</p>

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

export default PreFooter;