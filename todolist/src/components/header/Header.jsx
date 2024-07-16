import React from "react";
import './Header.css';

const Header = (props) => {
    const{nome} = props;
    return(
        <div className="header">
            <span > Olá, {nome}</span>
        </div>
    );
}
export default Header;