import React from 'react';
import {Link} from "react-router-dom";

const ErrorBoundary = () => {

    return (
        <div
            id="error-page"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              background: "#003663",
              color: "#FFF",
              marginBottom: "5rem"
            }}
        >
          <h1 style={{fontSize: "6.4rem", marginBottom: "4rem"}}>Ой! </h1>
          <p style={{fontSize: "3.2rem", marginBottom: "2rem"}}>Что-то пошло не так!</p>
          <p style={{fontSize: "2.8rem"}}>Вернуться на <Link to="/" style={{textDecoration: "underline"}}>Главную страницу</Link></p>
        </div>
    )

};

export default ErrorBoundary;