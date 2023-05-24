import React, {FC} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import ErrorBoundary from "./pages/ErrorPage";
import Page from "./pages/Page";
import Subpage from "./pages/Subpage";
import InfoPartners from "./components/InfoBlock/InfoPartners";
import InfoTestimonials from "./components/InfoBlock/InfoTestimonials";
import InfoContacts from "./components/InfoBlock/InfoContacts";
import Lists from "./pages/Lists";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Page title="Наша продукция"/>}>
            <Route index element={<Lists title="Наша продукция"/>}/>
            <Route path="composite-rebar" element={<Subpage title="Композитная арматура"/>}/>
            <Route path="composite-mesh" element={<Subpage title="Композитная сетка"/>}/>
            <Route path="bent-composite-elements" element={<Subpage title="Гнутые композитные элементы"/>}/>
            <Route path="flexible-composite-ties" element={<Subpage title="Гибкие композитные связи"/>}/>
            <Route path="waterproofing-mixtures" element={<Subpage title="Гидроизоляционные смеси"/>}/>
            <Route path="rebar-clamps" element={<Subpage title="Фиксаторы арматуры"/>}/>
            <Route path="composite-profile-products" element={<Subpage title="Композитные профильные изделия"/>}/>
            <Route path="fiberglass-and-basalt" element={<Subpage title="Фибра стеклопластик и базальт"/>}/>
          </Route>

          <Route path="specials" element={<Page title="Акции"/>}>
            <Route index element={<Lists title="Акции"/>}/>
            <Route path="special-1" element={<Subpage title="Акция-1"/>}/>
            <Route path="special-2" element={<Subpage title="Акция-2"/>}/>
            <Route path="super-special-3" element={<Subpage title="Супер акция-3"/>}/>
          </Route>

          <Route path="equipment" element={<Page title="Оборудование"/>}>
            <Route index element={<Lists title="Оборудование"/>}/>
            <Route path="equipment-one" element={<Subpage title="Оборудование-1"/>}/>
            <Route path="equipment-two" element={<Subpage title="Оборудование-2"/>}/>
            <Route path="equipment-three" element={<Subpage title="Оборудование-3"/>}/>
            <Route path="equipment-four" element={<Subpage title="Оборудование-4"/>}/>
            <Route path="equipment-five" element={<Subpage title="Оборудование-5"/>}/>
            <Route path="equipment-six" element={<Subpage title="Оборудование-6"/>}/>
          </Route>

          <Route path="for-partners" element={<Page title="Партнерам"/>}/>
          <Route path="about" element={<Page title="О заводе"/>}>
            <Route index element={<Lists title="О заводе"/>}/>
            <Route path="history" element={<Subpage title="История"/>}/>
            <Route path="documentation" element={<Subpage title="Документация"/>}/>
            <Route path="blog" element={<Subpage title="Блог"/>}/>
            <Route path="testimonials" element={<Subpage title="Видеоотзывы"/>}/>
          </Route>

          <Route path="delivery" element={<Page title="Доставка"/>}/>
          <Route path="contacts" element={<Page title="Контакты"/>}/>

          <Route path="/" element={<Home/>}>
            <Route path="partners" element={<InfoPartners/>}/>
            <Route path="testimonials" element={<InfoTestimonials/>}/>
            <Route path="contact-us" element={<InfoContacts/>}/>
          </Route>

          <Route path="*" element={<ErrorBoundary/>}/>
        </Route>
    )
)

const App: FC = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;