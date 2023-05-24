import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export interface IPageProps {
  title?: string
}

const Page: FC<IPageProps> = ({title}) => {

  return (

      <div className="page-wrapper"
           style={{
             margin: " 2rem auto 0",
             display: "flex",
             alignContent: "center",
             textAlign: "center",
             height: "100%",
             flexDirection: "column"
           }}
      >
        <Breadcrumbs />
        <h1
            style={{
              color: "black",
              margin: "20rem auto 5rem",
              fontSize: "6.4rem"
            }}
        >
          {title}
        </h1>
        <Outlet />
      </div>
  );
};

export default Page;