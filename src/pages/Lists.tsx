import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IMenuItem} from "../types/types";
import {menu} from "../utils/menus";
import {IPageProps} from "./Page";

const Lists: FC<IPageProps> = ({title}) => {

  return (
      <ul>
        {menu.map((item: IMenuItem) => (
          item.children && item.name === title
            ?
            item.children.map((itemChild) => {
              return (
                  <li key={itemChild.id} style={{fontSize: "2.4rem", paddingBottom: "1.5rem"}}>
                    <Link to={itemChild.link}>{itemChild.name}</Link>
                  </li>
              )
            })
            :
            null
          ))
        }
      </ul>
  );
}


export default Lists;