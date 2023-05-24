import React, {FC} from 'react';
import {IPageProps} from "./Page";

const Subpage: FC<IPageProps> = ({title}) => {

  return (
      <h3
          style={{
            color: "black",
            fontSize: "3.2rem",
            margin: "2rem auto"
          }}
      >
        {title}
      </h3>

  );
};

export default Subpage;
