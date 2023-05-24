import React, {Dispatch, FC} from 'react';
import "./style.css";

interface IBigMenuProps {
  props: {
  isActive?: boolean;
  setIsActive?: Dispatch<React.SetStateAction<boolean>>;
  }
}

const ProductsList: FC<IBigMenuProps> = ({props: {isActive, setIsActive}}) => {
  return (
      <div className={isActive ? "productList active" : "productList"}>

        <div className="productList__block">
          <p>Композитная арматура</p>
          <ul>
            <li>Стеклопластиковая арматура</li>
            <li>Арматура стеклопластиковая с песчаным покрытием</li>
            <li>Арматура базальтопластиковая</li>
            <li>Арматура базальтопластиковая с песчаным покрытием</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Композитная сетка</p>
          <ul>
            <li>Стеклопластиковая сетка ГОСТ Р 58964-2020</li>
            <li>Базальтовая сетка ГОСТ Р 58964-2020</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Гнутые композитные элементы</p>
          <ul>
            <li>Стеклопластиковая арматура</li>
            <li>Арматура стеклопластиковая с песчаным покрытием</li>
            <li>Арматура базальтопластиковая</li>
            <li>Арматура базальтопластиковая с песчаным покрытием</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Гибкие композитные связи</p>
          <ul>
            <li>Гибкие связи стеклопластиковые и базальтовые</li>
            <li>Гибкие связи анкер с утолщением</li>
            <li>Гибкие связи с песчаным покрытием</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Гидроизаляционные смеси</p>
          <ul>
            <li>Стеклопластиковая арматура</li>
            <li>Арматура стеклопластиковая с песчаным покрытием</li>
            <li>Арматура базальтопластиковая</li>
            <li>Арматура базальтопластиковая с песчаным покрытием</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Фиксаторы арматуры</p>
          <ul>
            <li>Стеклопластиковая сетка ГОСТ Р 58964-2020</li>
            <li>Базальтовая сетка ГОСТ Р 58964-2020</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Композитные профильные изделия</p>
          <ul>
            <li>Стеклопластиковая арматура</li>
            <li>Арматура стеклопластиковая с песчаным покрытием</li>
            <li>Арматура базальтопластиковая</li>
            <li>Арматура базальтопластиковая с песчаным покрытием</li>
          </ul>
        </div>

        <div className="productList__block">
          <p>Фибра стеклопластик и базальт</p>
          <ul>
            <li>Гибкие связи стеклопластиковые и базальтовые</li>
            <li>Гибкие связи анкер с утолщением</li>
            <li>Гибкие связи с песчаным покрытием</li>
          </ul>
        </div>

      </div>
  );
};

export default ProductsList;