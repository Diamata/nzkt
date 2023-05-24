import {IMenuItem} from "../types/types";
import {IFormTemplate} from "../components/FormTemplate";

export const menu: IMenuItem[] = [
  {
    "id": 1,
    "name": "Наша продукция",
    "link": "/products",
    "children": [
      {
        "id": 11,
        "name": "Композитная арматура",
        "link": "/products/composite-rebar"
      },
      {
        "id": 12,
        "name": "Композитная сетка",
        "link": "/products/composite-mesh"
      },
      {
        "id": 13,
        "name": "Гнутые композитные элементы",
        "link": "/products/bent-composite-elements"
      },
      {
        "id": 14,
        "name": "Гибкие композитные связи",
        "link": "/products/flexible-composite-ties"
      },
      {
        "id": 15,
        "name": "Гидроизоляционные смеси",
        "link": "/products/waterproofing-mixtures"
      },
      {
        "id": 16,
        "name": "Фиксаторы арматуры",
        "link": "/products/rebar-clamps"
      },
      {
        "id": 17,
        "name": "Композитные профильные изделия",
        "link": "/products/composite-profile-products"
      },
      {
        "id": 18,
        "name": "Фибра стеклопластик и базальт",
        "link": "/products/fiberglass-and-basalt"
      }
    ]
  },
  {
    "id": 2,
    "name": "Акции",
    "link": "/specials",
    "children": [
      {
        "id": 21,
        "name": "Special 1",
        "link": "/specials/special-1"
      },
      {
        "id": 22,
        "name": "Special 2",
        "link": "/specials/special-2"
      },
      {
        "id": 23,
        "name": "Super Special 3",
        "link": "/specials/super-special-3"
      }
    ]
  },
  {
    "id": 3,
    "name": "Оборудование",
    "link": "/equipment",
    "children": [
      {
        "id": 31,
        "name": "Equipment 1",
        "link": "/equipment/equipment-one"
      },
      {
        "id": 32,
        "name": "Equipment 2",
        "link": "/equipment/equipment-two"
      },
      {
        "id": 33,
        "name": "Equipment 3",
        "link": "/equipment/equipment-three"
      },
      {
        "id": 34,
        "name": "Equipment 4",
        "link": "/equipment/equipment-four"
      },
      {
        "id": 35,
        "name": "Equipment 5",
        "link": "/equipment/equipment-five"
      },
      {
        "id": 36,
        "name": "Equipment 6",
        "link": "/equipment/equipment-six"
      }
    ]
  },
  {
    "id": 4,
    "name": "Партнерам",
    "link": "/for-partners"
  },
  {
    "id": 5,
    "name": "О заводе",
    "link": "/about",
    "children": [
      {
        "id": 51,
        "name": "История успеха",
        "link": "/about/history"
      },
      {
        "id": 52,
        "name": "Документация",
        "link": "/about/documentation"
      },
      {
        "id": 53,
        "name": "Блог",
        "link": "/about/blog"
      },
      {
        "id": 54,
        "name": "Видеоотзывы",
        "link": "/about/testimonials"
      }
    ]
  },
  {
    "id": 6,
    "name": "Доставка",
    "link": "/delivery"
  },
  {
    "id": 7,
    "name": "Контакты",
    "link": "/contacts"
  }
];

export const formFieldsContacts: IFormTemplate = {
  name: "email",
  type: "email",
  header: "Напишите нам",
  fieldTypeName: "Ваш email:",
  fieldMessage: "Ваше сообщение:",
  buttonName: "Отправить",
  closeProp: () => {}
}

export const formFieldsModalCallback: IFormTemplate = {
  name: "tel",
  type: "number",
  header: "Мы вам перезвоним!",
  fieldTypeName: "Ваш телефон:",
  fieldMessage: "Ваше сообщение:",
  buttonName: "Заказать звонок",
  closeProp: () => {}
}
