import { useNavigate } from "react-router-dom";
import glass from '../../css/transparent-glass.module.css';
import React from "react";

export default function NavIconButton({ children, disabled, icon, route, ...props }) {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate(route ?? '/pages/about');
    }

    return (
        <button
            {...props}
            disabled={disabled}
            className={glass.iconbutton}
            onClick={props.onClick??routeChange}>

          {/* // If icon prop is provided then render ICON component */}
            {icon && <div className={glass.circleStyles}>
            <img src={icon} alt="Nav Arrow" />
        </div>}

          {/* //Other children */}
            {children}

        </button>
    );

};