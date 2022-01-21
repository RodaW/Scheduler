import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button({ danger, confirm, onClick, disabled, children }) {

   return (
      <button
         className={classNames("button",{ "button--confirm": confirm }, { "button--danger": danger })}
         disabled={disabled}
         onClick={onClick}>
         {children}
      </button>);
}
